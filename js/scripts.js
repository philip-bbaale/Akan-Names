//declaring variables
var century, year, month, day;

//get imput
function storeInput{
century = parseInt(document.getElementById("century").value);
year = parseInt(document.getElementById("year").value);
month = parseInt(document.getElementById("month").value);
dayOfMonth = parseInt(document.getElementById("dayofmonth").value);

//if no value entered
if(century == ""){
    alert("Input the correct gender");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    return false;
  }else if (month == ""||<= 0||> 12){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth == ""||<=0||>31){
    alert("input the correct date");
    return false;
  }
}
//calculating day of week
function calculatingDayOfWeek(){
  storeInput();
  dayOfWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
  console.log(dayOfWeek);
}
function myFunction() {
  document.getElementById("answer").innerHTML = "Hello World";
}
