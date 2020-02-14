//declaring variables
var century, year, month, dayOfMonth, years, gender;
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

//get imput
/*function storeInput(){
//century = parseInt(document.getElementById("century").value);
year = parseInt(document.getElementById("year").value);
month = parseInt(document.getElementById("month").value);
dayOfMonth = parseInt(document.getElementById("dayofmonth").value);
century = document.getElementById("year").value.slice(0,2);
century = parseInt(century);
years = document.getElementById("year").value.slice(2,4);
years = parseInt(years);

//checking for Validity and calculating day of the week
if (month==='undefined'){
  alert('Insert month');
}
else if (month<0 || month>12){
  alert('Invalid Month');
}
else if (dayOfMonth<0 || dayOfMonth>31) {
  alert('Invalid Day');
}
else {
  var dayOfWeek = Math.floor(( ( (century/4) -2*century-1) + ((5*years/4) ) + ((26*(month+1)/10)) + dayOfMonth ) % 7 );
  return dayOfWeek;
}
}

//getting Gender
function getGender(){
  var selectedGender = document.getElementById('inputGroupSelect01').value;
if (selectedGender==1) {
   gender = "male";
  }
  else if (selectedGender==2) {
   gender = "female"
  }
  else {
    alert("Select Gender");
  }
  return gender;
}*/

//finding akan names
/*function akanNameFind(){
  var newDayOfWeek = storeInput();
  var newGender = getGender();
  if(newGender==="male"){
    document.getElementById("answer").innerHTML=("You were born on " +days[newDayOfWeek] +" and your Akan name is. " +maleNames[newDayOfWeek]);
  }
  else if (newGender==="female") {
    document.getElementById("answer").innerHTML=("You were born on " +days[newDayOfWeek] +" and your Akan name is. " +femaleNames[newDayOfWeek]);
  }
  else {
    document.getElementById("answer").innerHTML=("Check your input please");
  }
}*/
