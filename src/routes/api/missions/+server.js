import { json } from '@sveltejs/kit';
import { fetchMissionByIndex } from '../../../api/notion';

export const GET = async () => {
    const randomIdx = Math.floor(Math.random() * 82);

    const page = await fetchMissionByIndex(randomIdx);
    if (!page) {
        return json({ error: 'Mission not found' }, { status: 404 });
    }
    const text = page.properties['text'].rich_text[0]?.plain_text ?? '미션을 불러오는 데 실패했습니다. 다시 시도해 주세요.';

    return json({ id: randomIdx, text });
};
