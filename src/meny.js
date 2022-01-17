const meny = (function () {
    const _content = document.getElementById("content")

    function displayPage() {
        const _title = document.createElement('h1');
        _title.innerText = "Meny";
        _content.appendChild(_title);

        //Contacts
        const _copy = document.createElement('div');
        _copy.setAttribute=("class", "contact");
        _copy.innerText = "starter main desert"
        _content.appendChild(_copy);
    }

    return {displayPage};
})();

export {meny};