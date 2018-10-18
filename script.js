const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    
    // seconds hand
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90; // seconds/60*360 for 100% based and +90 to offset for starting the hand at 12 o clock (i.e. transform: rotate(90deg))
    
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    // minutes hand
    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + 90;

    minHand.style.transform = `rotate(${minsDeg}deg)`;

    // hour hand
    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;

    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000)