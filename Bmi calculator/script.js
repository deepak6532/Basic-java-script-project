function bmi(){
    var h = parseInt(document.getElementById("height").value);
    var w = parseInt( document.getElementById("weight").value);
    
    var bmi = w/(h/100 * h/100);

    var total = bmi.toFixed(2);
    document.getElementById("result").innerHTML = "Your Bmi Score is: " + total;
}