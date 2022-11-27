export function disableScroll() {
    const topScroll = window.scrollY || document.documentElement.scrollTop
    const leftScroll = window.scrollX || document.documentElement.scrollLeft

    window.onscroll = function() {
        window.scrollTo(leftScroll, topScroll);
    };
}

export function enableScroll() {
    window.onscroll = () => {}
}