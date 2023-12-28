function convert() {
  var receivedInputVal = document.getElementById("received-val");
  var firstUnitVal = document.getElementById("first-unit").value;
  var secondUnitVal = document.getElementById("second-unit").value;
  var convertedValue = 0;

  var receivedVal = Number(receivedInputVal.value);
  if (isNaN(receivedVal)){
    document.getElementById("result").innerHTML = "Invalid input";
    return;
  }
  //Above function rectifies inputs from unrelevent values...

  if(firstUnitVal == secondUnitVal){
    convertedValue = receivedVal *1;
  }else if(firstUnitVal == "celsius" && secondUnitVal == "fahrenheit"){
    convertedValue = (receivedVal*1.8)+32;
  }else if(firstUnitVal == "celsius" && secondUnitVal == "kelvin"){
    convertedValue = receivedVal+273.15;
  }else if(firstUnitVal == "fahrenheit" && secondUnitVal == "celsius"){
    convertedValue = (receivedVal-32)*0.5556;
  }else if(firstUnitVal == "fahrenheit" && secondUnitVal == "kelvin"){
    convertedValue = ((receivedVal-32)*0.5556)+273.15;
  }else if(firstUnitVal == "kelvin" && secondUnitVal == "celsius"){
    convertedValue = receivedVal-273.15;
  }else if(firstUnitVal == "kelvin" && secondUnitVal == "fahrenheit"){
    convertedValue = ((receivedVal-273.15)*1.8)+32;
  }else{
    convertedValue = 0;
  }
  document.getElementById("result").innerHTML = `${convertedValue.toFixed(4)} ${secondUnitVal}`;
}