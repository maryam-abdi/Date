
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const addDateBtn = document.querySelector(".add-date-btn ");
addDateBtn.addEventListener("click",(e)=>{
e.preventDefault();
let dayDate = dayInput.value;
let mounthDate = monthInput.value;
let yearDate = yearInput.value;
let minesYear = new Date().getTime() - Date.parse(mounthDate,dayDate,yearDate) ;
let secends = Math.floor(minesYear / 1000),
minutes = Math.floor(secends / 60),
hours = Math.floor(minutes / 60),
days = Math.floor(hours / 24),
mounth = Math.floor(days / 30),
year = Math.floor(days / 365);

document.getElementById("cart-date-year").textContent = year;
document.getElementById("cart-date-month").textContent = mounth;
document.getElementById("cart-date-day").textContent = days;
dayInput.value = "";
monthInput.value="";
yearInput.value="";
console.log(`month:${mounth} and days:${days} and year:${year}`)
})

// function setDate(date){
//  let {dayDate,mounthDate,yearDate} = date;
//  const minesYear = new Date().getTime() - new Date(date).getTime() ;
//  let secends = Math.floor(minesYear / 1000),
//  minutes = Math.floor(secends / 60),
//  hours = Math.floor(minutes / 60),
//  days = Math.floor(hours / 24),
//  mounth = Math.floor(days / 30),
//  year = Math.floor(days / 365);
//  dayDate = days;
//  mounthDate = mounth;
//  yearDate = year;
// //  secends %= 60;
// //  minutes %= 60;
// //  hours %= 24;
// //  days %= 30;
// //  mounth %= 12;

//  document.getElementById("cart-date-year").innerText = year;
//  document.getElementById("cart-date-month").innerText = mounth;
//  document.getElementById("cart-date-day").innerText = days;
 
 
 
// }
