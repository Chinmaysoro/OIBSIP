function convert() {
  var receivedVal = document.getElementById("received-val").value;
  var firstUnitVal = document.getElementById("first-unit").value;
  var secondUnitVal = document.getElementById("second-unit").value;
  var convertedValue = 0;

  if(firstUnitVal == secondUnitVal){
    convertedValue = receivedVal *1;
  }else if(firstUnitVal == "celsius" && secondUnitVal == "fahrenheit"){
    convertedValue = (eval(receivedVal)*1.8)+32;
  }else if(firstUnitVal == "celsius" && secondUnitVal == "kelvin"){
    convertedValue = eval(receivedVal)+273.15;
  }else if(firstUnitVal == "fahrenheit" && secondUnitVal == "celsius"){
    convertedValue = (eval(receivedVal)-32)*0.5556;
  }else if(firstUnitVal == "fahrenheit" && secondUnitVal == "kelvin"){
    convertedValue = ((eval(receivedVal)-32)*0.5556)+273.15;
  }else if(firstUnitVal == "kelvin" && secondUnitVal == "celsius"){
    convertedValue = eval(receivedVal)-273.15;
  }else if(firstUnitVal == "kelvin" && secondUnitVal == "fahrenheit"){
    convertedValue = ((eval(receivedVal)-273.15)*1.8)+32;
  }else{
    convertedValue = 0;
  }
  document.getElementById("result").innerHTML = `${convertedValue || 0} ${secondUnitVal || ""}`;
}