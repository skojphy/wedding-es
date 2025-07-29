import { json, error } from '@sveltejs/kit';
import { updateUserByName } from '../../../../api/notion';

/**
 * POST /api/users/updateUser
 * Body: { name: string, missionId: number }
 */
export const POST = async ({ request }) => {
    const { name, missionId } = await request.json();
    if (!name || missionId === undefined) {
        throw error(400, 'name과 missionId를 모두 제공해야 합니다.');
    }
    try {
        await updateUserByName(name, { missionId });
        return json({ success: true });
    } catch (e) {
        console.error('updateUserByName error:', e);
        throw error(500, e.message || '유저 업데이트 중 오류 발생');
    }
};
