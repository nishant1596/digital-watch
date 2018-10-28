const timesec=document.querySelector('#section1');
const datesec=document.querySelector('#section2');
const daysec=document.querySelector('#section3');
const milsec=document.querySelector('#section5');

function showTime(){
  const d=new Date();
  let second=d.getSeconds(),
        minute=d.getMinutes(),
        hour=d.getHours(),
        year=d.getFullYear(),
        month=d.getMonth(),
        day=d.getDay(),
        date=d.getDate();
        milisec=d.getMilliseconds();
console.log(second,minute,hour,year,month,day,date,milisec);

switch(day){
  case 0:
    day="Sunday";
    break;
  case 1:
    day="Monday";
    break;
  case 2:
    day="Tuesday";
    break;
  case 3:
    day="Wednesday";
    break;
  case 4:
    day="Thursday";
    break;
  case 5:
    day="Friday";
    break;
  case 6:
    day="Saturday";
    break;
}
console.log(day);
switch(month){
  case 0:
    month="January";
    break;
  case 1:
    month="february";
    break;
  case 2:
    month="March";
    break;
  case 3:
    month="April";
    break;
  case 4:
    month="May";
    break;
  case 5:
    month="June";
    break;
  case 6:
    month="July";
    break;
  case 7:
    month="August";
    break;
  case 8:
    month="September";
    break;
  case 9:
    month="October";
    break;
  case 10:
    month="November";
    break;
  case 11:
    month="December";
    break;
}
console.log(month);
console.log(year);
if(0<=hour && hour<10){
  hour="0"+hour;
}
if(0<=minute && minute<10){
  minute="0"+minute;
}
if(0<=second && second<10){
  second="0"+second;
}
console.log(hour+" "+minute+" "+second);


/////////////// Adding time to the UI /////////////////////////

timesec.innerHTML=`<span>${hour}</span> : <span>${minute}</span> : <span>${second}</span> `;
datesec.innerHTML=`<span style="font-family: 'Orbitron', sans-serif;">${date}</span>-<span style="font-family: 'Orbitron', sans-serif;">${month}</span>-<span  style="font-family: 'Orbitron', sans-serif;">${year}</span>`;
milsec.innerHTML=`<span>${milisec}</span>`
daysec.innerHTML=`<span>${day}</span>`;
}
setInterval(showTime,100);
