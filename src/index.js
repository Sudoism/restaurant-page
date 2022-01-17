import {presentation} from './presentation';
import {contact} from './contact';
import {meny} from './meny';


const displayController = (function(){
    const _content = document.getElementById("content")

    function _cleanContent () {
        _content.innerHTML = '';
    }

    function _pageSelectionLoad() {
        const pageSelection = document.createElement('div');
        pageSelection.setAttribute("id","selection")

        const presentationSelect = document.createElement('div');
        presentationSelect.setAttribute("id","presentation")
        presentationSelect.innerText = 'Home';
        pageSelection.appendChild(presentationSelect);

        const contactSelect = document.createElement('div');
        contactSelect.setAttribute("id","contact")
        contactSelect.innerText = 'Contact';
        pageSelection.appendChild(contactSelect);

        const menySelect = document.createElement('div');
        menySelect.setAttribute("id","meny")
        menySelect.innerText = 'Meny';
        pageSelection.appendChild(menySelect);

        _content.appendChild(pageSelection);
    }
    
    function firstLoad () {
        _pageSelectionLoad()
        presentation.displayPage();
    }

    function presentationPageLoad() {
        presentation.displayPage();
    }

    function contactPageLoad() {
        contact.displayPage();
        
    }

    function menyPageLoad() {
        meny.displayPage();
        
    }
    return {firstLoad, presentationPageLoad, contactPageLoad}

})()

displayController.firstLoad()




