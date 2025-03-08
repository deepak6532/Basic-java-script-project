function calculate()
{

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
  console.log("weight",weight)
  console.log("height",height)   

  if(isNaN(weight) || isNaN(height) || height<=0 || weight<=0){
        document.getElementById("result").innerHTML = "Please enter valid values";    
    
        document.getElementById("result").classList=
        "text-md font-semibold text-center text-red-300";
    }
    else{
    let bmi = (weight /Math.pow(height /100,2)).toFixed(2);
    document.getElementById("result").innerHTML = "Your BMI Score is: " + bmi;

    document.getElementById("result").classList="text-center font-semibold text-yellow-500";
    }
}
// calculate();
