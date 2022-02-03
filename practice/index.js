document.write("Abdrashov Temirzhan,CS-2123" + '<p>');
var date = new Date();
  var currentYear = date.getFullYear();
  var currentDay = date.getDate();
  var currentMonth = date.getMonth();
  var monthOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var currentDayOfWeek = date.getDay();
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var currentHour = date.getHours();
  var currentMinute = date.getMinutes();
  var currentSecond = date.getSeconds();
document.write("Current day:" + '<p>');
document.write("Year: " + currentYear + '<br>');
document.write("Today is : " + dayOfWeek[currentDayOfWeek] + '<br>');
document.write("Day: " + currentDay  + '<br>');
document.write("Month: " + monthOfYear[currentMonth] + '<br>');
document.write("Current time is : " + currentHour + ' ' + ' : ' + currentMinute + ' : ' + currentSecond + '<p>');
  var today = new Date();
  var uni = new Date(2022, 2, 2);
    if (today.getFullYear()==2022 && today.getMonth()==2 && today.getDate()>2);
{
uni.setFullYear(uni.getFullYear()+1);
}
var one_day=1000*60*60*24;
document.write(Math.ceil((uni.getTime()-today.getTime())/(one_day)) + " days left until the freedom!" + '<p>');









var a = document.getElementById("num1").value;
var b = document.getElementById ("num2").value;
function multiplyBy(){
num2=document.getElementById("num2").value;
num2=document.getElementById("num2").value;
document. getElementById ("result"). innerHTML=num1 * num2;
}
function divideBy(){
  num2=document.getElementById("num2").value;
  num2=document.getElementById("num2").value;
document. getElementById ("result"). innerHTML=num1 / num2;
}
