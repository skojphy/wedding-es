import { json, error } from '@sveltejs/kit';
import { createUser } from '../../../../api/notion';

/**
 * POST /api/users/createUser
 * 요청 바디:
 *  - name: string
 */
export async function POST({ request }) {
    const { name } = await request.json();
    if (!name) {
        throw error(400, 'name은 필수입니다.');
    }
    try {
        const created = await createUser(name);
        return json({ success: true, pageId: created.id });
    } catch (e) {
        console.error('User API error:', e);
        throw error(e.status || 500, e.message || '유저 처리 중 오류 발생');
    }
}
