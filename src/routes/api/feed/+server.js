import { json, error } from '@sveltejs/kit';
import { fetchFeed } from '../../../api/notion';

export const GET = async ({ url }) => {
    const feedIdParam = url.searchParams.get('feedId');

    if (!feedIdParam) {
        throw error(400, 'feedId query parameter is required');
    }
    try {
        const feed = await fetchFeed(feedIdParam);
        return json({
            likes: feed.liked.number,
            comments: feed.comments.rich_text[0]?.plain_text ?? ''
        });
    } catch (e) {
        console.error('Error fetching feed:', e);
        const msg = e.message || '';
        if (msg.startsWith('Feed with id')) {
            throw error(404, msg);
        }
        if (msg === 'Invalid feedId') {
            throw error(400, msg);
        }
        throw error(500, 'Failed to fetch feed');
    }
};
