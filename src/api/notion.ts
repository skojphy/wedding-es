import { Client } from '@notionhq/client';

export const VITE_NOTION_TOKEN = import.meta.env.VITE_NOTION_TOKEN;
export const userDatabaseId = import.meta.env.VITE_NOTION_DB_ID_USERS;
export const missionDatabaseId = import.meta.env.VITE_NOTION_DB_ID_MISSIONS;

if (!VITE_NOTION_TOKEN || !userDatabaseId || !missionDatabaseId) {
    throw new Error('Notion API 환경 변수가 설정되지 않았습니다.');
}

export const notion = new Client({ auth: VITE_NOTION_TOKEN });


export async function fetchMissionByIndex(idx: number) {
    const res = await notion.databases.query({
        database_id: missionDatabaseId,
        filter: {
            property: 'id',
            title: { equals: String(idx) }
        },
        page_size: 1
    });
    return res.results[0];
}