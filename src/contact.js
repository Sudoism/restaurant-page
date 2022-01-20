import './contactstyle.css'

const contact = (function () {
    const _content = document.getElementById("content")

    function displayPage() {
        const _title = document.createElement('h1');
        _title.innerText = "Contacts";
        _content.appendChild(_title);

        //Contacts
        const _contacts = document.createElement('div');
        _contacts.setAttribute("id", "contacts");

        const masterChef = document.createElement('div');
        masterChef.setAttribute("class", "contact");

        const masterChefName = document.createElement('div');
        masterChefName.setAttribute("class", "contactName");
        masterChefName.innerText = 'Monsiour Bolognese';
        masterChef.appendChild(masterChefName);

        const masterChefTitle = document.createElement('div');
        masterChefTitle.setAttribute("class", "contactTitle");
        masterChefTitle.innerText = 'Master Chef';
        masterChef.appendChild(masterChefTitle);

        const masterChefNumber = document.createElement('div');
        masterChefNumber.setAttribute("class", "contactNumber");
        masterChefNumber.innerText = '+123123123';
        masterChef.appendChild(masterChefNumber);

        const masterChefMail = document.createElement('div');
        masterChefMail.setAttribute("class", "contactMail");
        masterChefMail.innerText = 'masterchef@restaurant.com';
        masterChef.appendChild(masterChefMail);

        _contacts.appendChild(masterChef);
    

        const owner = document.createElement('div');
        owner.setAttribute("class", "contact");

        const ownerName = document.createElement('div');
        ownerName.setAttribute("class", "contactName");
        ownerName.innerText = 'Mister Business';
        owner.appendChild(ownerName);

        const ownerTitle = document.createElement('div');
        ownerTitle.setAttribute("class", "contactTitle");
        ownerTitle.innerText = 'Owner';
        owner.appendChild(ownerTitle);

        const ownerNumber = document.createElement('div');
        ownerNumber.setAttribute("class", "contactNumber");
        ownerNumber.innerText = '+123123124';
        owner.appendChild(ownerNumber);

        const ownerMail = document.createElement('div');
        ownerMail.setAttribute("class", "contactMail");
        ownerMail.innerText = 'masterchef@restaurant.com';
        owner.appendChild(ownerMail);

        _contacts.appendChild(owner);


        const booking = document.createElement('div');
        booking.setAttribute("class", "contact");

        const bookingName = document.createElement('div');
        bookingName.setAttribute("class", "contactName");
        bookingName.innerText = 'Head Waiter';
        booking.appendChild(bookingName);

        const bookingTitle = document.createElement('div');
        bookingTitle.setAttribute("class", "contactTitle");
        bookingTitle.innerText = 'Booking';
        booking.appendChild(bookingTitle);

        const bookingNumber = document.createElement('div');
        bookingNumber.setAttribute("class", "contactNumber");
        bookingNumber.innerText = '+123123127';
        booking.appendChild(bookingNumber);

        const bookingMail = document.createElement('div');
        bookingMail.setAttribute("class", "contactMail");
        bookingMail.innerText = 'booking@restaurant.com';
        booking.appendChild(bookingMail);

        _contacts.appendChild(booking);

        _content.appendChild(_contacts);
        
    }

    return {displayPage};
})();

export {contact};