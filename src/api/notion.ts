import { Client } from '@notionhq/client';

export const VITE_NOTION_TOKEN = import.meta.env.VITE_NOTION_TOKEN;
export const userDatabaseId = import.meta.env.VITE_NOTION_DB_ID_USERS;
export const missionDatabaseId = import.meta.env.VITE_NOTION_DB_ID_MISSIONS;
export const feedDatabaseId = import.meta.env.VITE_NOTION_DB_ID_FEEDS;

if (!VITE_NOTION_TOKEN || !userDatabaseId || !missionDatabaseId || !feedDatabaseId) {
    throw new Error('Notion API 환경 변수가 누락되었습니다.');
}

export const notion = new Client({ auth: VITE_NOTION_TOKEN });


export async function fetchMissionByIndex(idx) {
    const res = await notion.databases.query({
        database_id: missionDatabaseId,
        filter: {
            property: 'id',
            title: { equals: String(idx) }
        },
        page_size: 1
    });
    const pages = res.results;
    return pages[0];
}

/**
 * 지정된 feed index(id)로 Feed 페이지를 DB에서 조회합니다.
 * @param idx Feed DB의 id 프로퍼티 값 (0~n)
 */
export async function fetchFeed(idx) {
    const res = await notion.databases.query({
        database_id: feedDatabaseId,
        filter: {
            property: 'id',
            title: { equals: String(idx) }
        },
        page_size: 1
    });
    const pages = res.results;
    return pages[0].properties;
}


/**
 * Feed DB의 id(Title 프로퍼티)로 좋아요 수를 1 증가시킵니다.
 * @param idx Feed DB의 id 프로퍼티 값 (0~n)
 */
export async function updateFeedLikeByIndex(idx: number) {
    const res = await notion.databases.query({
        database_id: feedDatabaseId,
        filter: {
            property: 'id',
            title: { equals: String(idx) }
        },
        page_size: 1
    });
    if (!res.results.length) {
        throw new Error(`Feed with id ${idx} not found`);
    }
    const page = res.results[0];
    const pageId = page.id;
    const current = page.properties['liked'].number ?? 0;
    await notion.pages.update({
        page_id: pageId,
        properties: {
            liked: { number: current + 1 }
        }
    });
}

/**
 * Feed DB의 id(Title 프로퍼티)로 댓글 배열을 업데이트합니다.
 * @param idx Feed DB의 id 프로퍼티 값 (0~n)
 * @param commentObj 댓글 객체 ({userName, comment, created_at})
 */
export async function addFeedCommentByIndex(idx, commentObj) {
    const res = await notion.databases.query({
        database_id: feedDatabaseId,
        filter: {
            property: 'id',
            number: { equals: idx }
        },
        page_size: 1
    });
    if (!res.results.length) {
        throw new Error(`Feed with id ${idx} not found`);
    }
    const page = res.results[0];
    const pageId = page.id;
    const prop = page.properties['comments'];
    let commentsArray: any[] = [];
    if (prop.type === 'rich_text' && prop.rich_text.length > 0) {
        try {
            commentsArray = JSON.parse(prop.rich_text[0].plain_text);
        } catch {
            commentsArray = [];
        }
    }
    commentsArray.push(commentObj);
    await notion.pages.update({
        page_id: pageId,
        properties: {
            comments: {
                rich_text: [
                    { text: { content: JSON.stringify(commentsArray) } }
                ]
            }
        }
    });
}
