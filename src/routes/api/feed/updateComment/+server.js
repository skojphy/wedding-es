import { json, error } from '@sveltejs/kit';
import { notion, feedDatabaseId } from '../../../../api/notion';

/**
 * POST /api/feed/updateComment
 * Body: { feedIndex: number, comments: string }
 * 프론트에서 전달된 전체 comments 배열(JSON 문자열)을 Notion에 덮어씁니다.
 */
export const POST = async ({ request }) => {
    const { feedIndex, comments } = await request.json();
    if (feedIndex === undefined || comments === undefined) {
        throw error(400, 'feedIndex와 comments(JSON 문자열)를 모두 제공해야 합니다.');
    }

    const res = await notion.databases.query({
        database_id: feedDatabaseId,
        filter: {
            property: 'id',
            title: { equals: String(feedIndex) }
        },
        page_size: 1
    });

    if (!res.results.length) {
        throw error(404, `Feed with id ${feedIndex} not found`);
    }

    const pageId = res.results[0].id;

    await notion.pages.update({
        page_id: pageId,
        properties: {
            comments: {
                rich_text: [
                    { text: { content: comments } }
                ]
            }
        }
    });

    return json({ status: 'ok' });
};
