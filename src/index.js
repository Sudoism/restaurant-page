import {presentation} from './presentation';
import {contact} from './contact';
import {meny} from './meny'; 

const displayController = (function(){
    const _content = document.getElementById("content")

    function _cleanContent () {
        _content.innerHTML = '';
    }

    function presentationPageLoad() {
        _cleanContent();
        _pageSelectionLoad();
        presentation.displayPage();
    }

    function contactPageLoad() {
        _cleanContent();
        _pageSelectionLoad();
        contact.displayPage();
        
    }

    function menyPageLoad() {
        _cleanContent();
        _pageSelectionLoad();
        meny.displayPage();
    }

    function _pageSelectionLoad() {
        const pageSelection = document.createElement('div');
        pageSelection.setAttribute("id","selection")

        const presentationSelect = document.createElement('div');
        presentationSelect.setAttribute("id","presentation")
        presentationSelect.innerText = 'Home';
        presentationSelect.addEventListener("click", presentationPageLoad);
        pageSelection.appendChild(presentationSelect);

        const contactSelect = document.createElement('div');
        contactSelect.setAttribute("id","contact")
        contactSelect.innerText = 'Contact';
        contactSelect.addEventListener("click", contactPageLoad)
        pageSelection.appendChild(contactSelect);

        const menySelect = document.createElement('div');
        menySelect.setAttribute("id","meny")
        menySelect.innerText = 'Meny';
        menySelect.addEventListener("click", menyPageLoad);
        pageSelection.appendChild(menySelect);

        _content.appendChild(pageSelection);
    }

    return {presentationPageLoad, contactPageLoad, menyPageLoad}

})()

displayController.presentationPageLoad();

