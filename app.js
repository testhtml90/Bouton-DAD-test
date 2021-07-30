const BadBtn = document.querySelector('.badBtn');
const BadReponse = document.querySelector('.bad-answer');
const GoodBtn = document.querySelector('.goodBtn');
const GoodReponse = document.querySelector('.good-answer');
const body = document.querySelector('body');


BadBtn.addEventListener('click', () => {
    console.log('badBtn Activate');
    body.classList.toggle('bad-answer-activate');
    BadReponse.classList.toggle('bad-answer-activate');
    GoodReponse.classList.toggle('bad-answer-activate-green');
    GoodBtn.style.opacity = 0;
});

GoodBtn.addEventListener('click', () => {
    console.log('GoodBtn Activate');
    body.classList.toggle('good-answer-activate');
    GoodReponse.classList.toggle('good-answer-activate');
    BadBtn.style.opacity = 0;
});