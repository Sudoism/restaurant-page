import Picture from './restaurant.jpeg'

const presentation = (function () {
    const _content = document.getElementById("content");

    function displayPage() {
        const _title = document.createElement('h1');
        _title.innerText = "Awsome Restaurant";
        _content.appendChild(_title);

        const _copy = document.createElement('p');
        _copy.innerText = "Swing by and feel the schwung in the tummy"
        _content.appendChild(_copy);

        const _resturantPicture = new Image();
        _resturantPicture.src = Picture;
        _content.appendChild(_resturantPicture);
    }

    return {displayPage};
})();

export {presentation};