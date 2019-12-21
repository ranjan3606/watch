const second = document.querySelector('.sec');
const minute = document.querySelector('.min');
const hours = document.querySelector('.hour');


function setDate(){
    const now = new Date();


    const seconds = now.getSeconds()
    const secBtn = ((seconds / 60)*360)+90;
    second.style.transform = `rotate(${secBtn}deg)`;

    const minutes = now.getMinutes()
    const minBtn = ((minutes / 60)*360)+((seconds / 60)*6)+90;
    minute.style.transform = `rotate(${minBtn}deg)`;

    const hourhere = now.getHours()
    const hourBtn = ((hourhere / 12)*360)+((minutes / 60)*30)+90;
    hours.style.transform = `rotate(${hourBtn}deg)`;

}

setInterval(setDate, 1000)
setDate()
