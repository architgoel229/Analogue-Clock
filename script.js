let cdate, hour, min, sec, mSec, exactSec, exactMin, exactHour;

function setTime() {
    cdate = new Date();
    hour = cdate.getHours();
    min = cdate.getMinutes();
    sec = cdate.getSeconds();
    mSec = cdate.getMilliseconds();
    // hour = (hour > 12) ? hour - 12 : hour;
    exactSec = (hour*60*60)+(min*60)+sec + mSec / 1000;
    
    exactMin = (hour*60)+min + sec / 60;
    exactHour = hour + min / 60 + sec/(60*60);

    document.querySelector(`.secHand`).style.transform = `rotate(${exactSec * 6}deg)`;
    document.querySelector(`.minHand`).style.transform = `rotate(${exactMin * 6}deg)`;
    document.querySelector(`.hourHand`).style.transform = `rotate(${exactHour * 30}deg)`;
    console.log(`${exactHour} ${exactMin} ${exactSec}`);
    let meridian=(hour>12)?"PM":"AM"
    hour = (hour > 12) ? hour - 12 : hour;
    let shour=(hour<10)?`0${hour}`:`${hour}`
    let smin=(min<10)?`0${min}`:`${min}`
    
    document.querySelector(`.digital`).innerHTML=`<h1>It's <div class="hour"> ${shour}</div><div class="minute">${smin} <span class="Meridian"> ${meridian}</span> </div></h1>`;
    
}

setInterval(setTime, 50);
