const buttonHeight = 150;
const buttonWidth = 250;

const maxHeight = window.innerHeight - buttonHeight;
const maxWidth = window.innerWidth - buttonWidth;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');

    button.addEventListener('onmouseover', () => {
        button.style.left = Math.floor(Math.random * maxWidth + 1) + 'px';
        button.style.top = Math.floor(Math.random * maxHeight + 1) + 'px';

    })
})