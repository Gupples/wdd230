const hamButton = document.querySelector('#menuButton');
const spacer = document.querySelector('#spacer');
const navLinks = document.querySelector('#navLinks');

hamButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamButton.classList.toggle('open');
    
    if (navLinks.classList.contains('open'))
        {
            spacer.classList.remove('open');
        } else {
            spacer.classList.add('open')
        };
        
        
    });
    
const main = document.querySelector('main');
const darkButton = document.querySelector('#darkMode')
darkButton.addEventListener('click', () => {
    main.classList.toggle('dark');
    darkButton.classList.toggle('dark');
});