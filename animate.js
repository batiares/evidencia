let intro = document.querySelector('.intro');
let logo = document.querySelector('.logoo');
let logoSpan = document.querySelectorAll('.logoo-parts');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 200);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idex) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(span +1) * 70);
            })
        }, 2000);
        
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    },)
});