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

})