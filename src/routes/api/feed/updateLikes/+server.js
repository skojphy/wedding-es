import { json, error } from '@sveltejs/kit';
import { notion, feedDatabaseId } from '../../../../api/notion';

/**
 * POST /api/feed/updateLikes
 * Body: { feedIndex: number, liked: boolean }
 * Feed DB의 id 프로퍼티 값을 사용해 좋아요 수를 증감합니다.
 */
export const POST = async ({ request }) => {
    const { feedIndex, liked } = await request.json();
    if (feedIndex === undefined || liked === undefined) {
        throw error(400, 'feedIndex와 liked(boolean)를 모두 제공해야 합니다.');
    }

    // 해당 feedIndex로 페이지 조회
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

    const page = res.results[0];
    const pageId = page.id;
    const current = page.properties['liked'].number ?? 0;
    const newCount = liked ? current + 1 : Math.max(0, current - 1);

    // 좋아요 수 업데이트
    await notion.pages.update({
        page_id: pageId,
        properties: {
            liked: { number: newCount }
        }
    });

    return json({ status: 'ok', liked: newCount });
};
