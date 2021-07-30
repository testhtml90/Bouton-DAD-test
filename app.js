const BadBtnO = document.querySelector('.badBtn');
const BadReponse = document.querySelector('.bad-answer');
const GoodBtnO = document.querySelector('.goodBtn');
const GoodReponse = document.querySelector('.good-answer');
const body = document.querySelector('body');


// BadBtn.addEventListener('click', () => {
//     console.log('badBtn Activate');
//     body.classList.toggle('bad-answer-activate');
//     BadReponse.classList.toggle('bad-answer-activate');
//     GoodReponse.classList.toggle('bad-answer-activate-green');
// });

function BadBtn(item){
    if(item.idName == "on") {
       item.idName="off";
       console.log('badBtn NO - Activate');
       body.classList.toggle('bad-answer-activate');
       BadReponse.classList.toggle('bad-answer-activate');
       GoodBtnO.style.opacity = 1;
       GoodBtnO.style.cursor = 'pointer';
    } else {
        item.idName="on";
        console.log('badBtn Activate');
        body.classList.toggle('bad-answer-activate');
        BadReponse.classList.toggle('bad-answer-activate');
        GoodBtnO.style.opacity = 0;
        GoodBtnO.style.cursor = 'default';
    }
 }


function GoodBtn(item){
    if(item.idName == "on") {
       item.idName="off";
       console.log('GoodBtn NO - Activate');
       body.classList.toggle('good-answer-activate');
       GoodReponse.classList.toggle('good-answer-activate');
       BadBtnO.style.opacity = 1;
       BadBtnO.style.cursor = 'pointer';
    } else {
        item.idName="on";
        console.log('GoodBtn Activate');
        body.classList.toggle('good-answer-activate');
        GoodReponse.classList.toggle('good-answer-activate');
        BadBtnO.style.opacity = 0;
        BadBtnO.style.cursor = 'default';
    }
 }