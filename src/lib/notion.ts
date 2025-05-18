import { Client } from '@notionhq/client';

const notion = new Client({
	auth: import.meta.env.VITE_NOTION_TOKEN,
	timeoutMs: 30000
});

const databaseId = import.meta.env.VITE_NOTION_DB_ID;

export async function fetchAllGames() {
	let all: any[] = [];
	let cursor: string | undefined;
	do {
		const resp = await notion.databases.query({
			database_id: databaseId,
			start_cursor: cursor
		});
		all.push(...resp.results);
		cursor = resp.has_more ? (resp.next_cursor as string) : undefined;
	} while (cursor);
	return all;
}

export async function createGameRecord(props: any, tries = 3): Promise<any> {
	try {
		return await notion.pages.create(props);
	} catch (err: any) {
		if (err.code === 'notionhq_client_request_timeout' && tries > 1) {
			console.warn(`타임아웃 발생, 재시도 남음: ${tries - 1}회`);
			return createGameRecord(props, tries - 1);
		}
		throw err;
	}
}
