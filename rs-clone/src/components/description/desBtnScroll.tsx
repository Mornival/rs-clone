export const BtnDesScroll = () => {
    function scrollTop() {
        window.scrollTo(0, 0);
    }

    return (
        <button className="descriptions__btn-scroll" type="button" title="перейти к началу" onClick={scrollTop}>
            <span className="sr-only">кнопка скролла вверх страницы</span>
        </button>
    );
};
