let hour=document.querySelector(".hour-hand");
let min=document.querySelector(".min-hand");
let sec=document.querySelector(".sec-hand");
function setDate(){
    let date=new Date();
    const hourVal=date.getHours();
    const minVal=date.getMinutes();
    const secVal=date.getSeconds();
    let secondsDegree=((secVal/60)*360 )+90;
    let MinutesDegree=(minVal*6)+(secVal*0.1)+90;
    let HoursDegree=(hourVal*30)+(minVal*0.5)+90;
    sec.style.transform=`rotate(${secondsDegree}deg)`;
    min.style.transform=`rotate(${MinutesDegree}deg)`;
    hour.style.transform=`rotate(${HoursDegree}deg)`;
    
}
setInterval(setDate, 1000)