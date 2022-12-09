window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu_item'),
          hamburger = document.querySelector('.hamburger'),
          requireElem = document.querySelector('#require2'),
          requireElemLink = document.querySelector('.menu :nth-child(4)');
          console.log(requireElem);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    requireElemLink.addEventListener('click', (event) => {
        event.preventDefault();
        requireElem.scrollIntoView({block: "center"});
        
    });

});