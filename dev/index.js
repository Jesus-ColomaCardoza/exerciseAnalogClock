const bigHand=document.querySelector('.big-hand');
const mediumHand=document.querySelector('.medium-hand');
const smallHand=document.querySelector('.small-hand');

let degreesSeg=0;
let degreesMin=0;
let degreesHour=0;

let contSeg=0
let contMin=0
let contHour=0

const moveClock=()=>{
    setInterval(() => {
        if (contSeg===60) {
            degreesSeg=-90 //we reset the degrees of the second when the minute is over ,to it don't increase infinitely
            contSeg=0; //we reset the counter of the seconds
            contMin++;
            degreesMin+=6
            mediumHand.style.transform=`translateX(50%) rotate(${(degreesMin)}deg)
            `;
        }else if (contMin===60) {
            degreesMin=-90 //we reset the degrees of the second when the hour is over to it don't increase infinitely
            contMin=0; //we reset the counter of the minutes 
            contHour++;
            degreesHour+=30
            bigHand.style.transform=`translateX(50%) rotate(${(degreesHour)}deg)`;    
        }else if (contHour===12) {
            degreesHour=-90 //we reset the degrees of the second when the day is over to it don't increase infinitely
            contHour=0
        }

        contSeg++;
        degreesSeg+=6
        smallHand.style.transform=` translateX(50%) rotate(${(degreesSeg)}deg)`;
        // console.log(degreesSeg);

    }, 1000);
}

const initClock=()=>{
    const startDate=new Date()
    
    const hour=startDate.getHours()-12;//-12 because the analog clock work from 1 to 12 hours
    const minute=startDate.getMinutes();
    const second=startDate.getSeconds(); 
    
    //we initialize the couter variable 
    contHour=hour;
    contMin=minute
    contSeg=second;

    //we set the current time on the analog clock
    degreesHour=hour*30-90 // hour*degrees-90 , we use -90 to start from tha hour 12
    degreesMin=minute*6-90
    degreesSeg=second*6-90
    bigHand.style.transform=`translateX(50%) rotate(${degreesHour}deg)`;
    mediumHand.style.transform=`translateX(50%) rotate(${degreesMin}deg)`;
    smallHand.style.transform=`translateX(50%) rotate(${degreesSeg}deg)`;

    moveClock()
}

initClock()

