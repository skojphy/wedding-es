import { json, error } from '@sveltejs/kit';
import {
    createUser,
    updateUserCommentsLiked,
    updateUserMission
} from '../../../api/notion';

/**
 * POST /api/users
 * Body:
 *  - pageId?: string
 *  - name?: string
 *  - missionId?: number
 *  - feedIndex?: number
 *  - photoIndex?: number
 */
export const POST = async ({ request }) => {
    const { pageId, name, missionId, feedIndex, photoIndex } = await request.json();
    if (!name && comments === undefined && liked === undefined && missionId === undefined) {
        throw error(400, '업데이트할 필드(name, comments, liked, missionId) 중 하나는 제공해야 합니다.');
    }
    try {
        // 1) 유저가 없으면 생성
        let effectivePageId = pageId;
        if (!effectivePageId && name) {
            const created = await createUser(name);
            effectivePageId = created.id;
        }
        if (!effectivePageId) {
            throw error(400, '유효한 pageId가 필요합니다.');
        }
        // 2) comments & liked 업데이트
        if (comments !== undefined || liked !== undefined) {
            await updateUserCommentsLiked(effectivePageId, comments, Boolean(liked), feedIndex, photoIndex);
        }
        // 3) mission & endTime 업데이트
        if (missionId !== undefined) {
            await updateUserMission(effectivePageId, missionId);
        }
        return json({ success: true, pageId: effectivePageId });
    } catch (err) {
        console.error('User update failed:', err);
        throw error(500, err.message || '유저 업데이트 중 오류 발생');
    }
};
