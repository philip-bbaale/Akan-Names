//declaring variables
var century, year, month, day;
//get imput
century = parseInt(document.getElementById("century").value);
year = parseInt(document.getElementById("year").value);
month = parseInt(document.getElementById("month").value);
dayofmonth = parseInt(document.getElementById("dayofmonth").value);
//if no value entered
if(century == ""){
    alert("Input the correct gender");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    return false;
  }else if (month == ""){
    alert("Input the correct month");
    return false;
  }else if(dayofmonth == ""){
    alert("input the correct date");
    return false;
  }
