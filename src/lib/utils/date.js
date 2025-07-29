/**
 * 주어진 날짜 문자열을 '조금 전', 'n분 전', 'n시간 전', '어제' 또는 날짜(월 일) 형식으로 반환합니다.
 * @param dateString ISO 문자열
 */
export const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = Date.now();
    const diffMs = now - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 60) return '조금 전';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}분 전`;
    const diffHrs = Math.floor(diffMin / 60);
    if (diffHrs < 24) return `${diffHrs}시간 전`;
    const diffDays = Math.floor(diffHrs / 24);
    if (diffDays === 1) return '어제';
    // 그 외 이전 날짜는 "M월 D일" 형식
    return date.toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' });
}
