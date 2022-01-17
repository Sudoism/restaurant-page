
const initialPageLoad = (function () {
    const _content = document.getElementById("content")

    function initialization() {
        const _title = document.createElement('h1')
        _title.innerText = "Awseom Restaurant";
        _content.appendChild(_title);
    }

    return {initialization};
})();

export {initialPageLoad};