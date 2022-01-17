const contact = (function () {
    const _content = document.getElementById("content")

    function displayContactPage() {
        const _title = document.createElement('h1');
        _title.innerText = "Contacts";
        _content.appendChild(_title);

        //Contacts
        const _copy = document.createElement('div');
        _copy.setAttribute=("class", "contact");
        _copy.innerText = "placeholder telephone number name"
        _content.appendChild(_copy);
    }

    return {displayContactPage};
})();

export {contact};