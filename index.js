function solve_salary() {
    var  emp_name = document.getElementById("emp_name").value;
 var  daily_rate = document.getElementById("daily_rate").value;
 var  no_days_work = document.getElementById("no_days_work").value;
 
     gross_pay= parseFloat(daily_rate) * no_days_work;
  
      results = "Employee's Name :     " + emp_name + ".";
   results2 ="Basic Salary  : Ksh " + gross_pay.toFixed(2)+".";
       
      document.getElementById("demo").innerHTML = results;
   document.getElementById("demo2").innerHTML = results2;
  
  }