export const disableScroll = () => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
    }
};

export const enableScroll = () => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
    }
};