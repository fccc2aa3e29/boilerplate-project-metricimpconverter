/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    const index = input.search(/[a-zA-z]+/);
    const numstr = input.slice(0, index);
    const i = numstr.search(/\//);
    
    if (index === 0){
      result = 1;
    }
    else if (i !== -1){
      result = Number(numstr.slice(0, i)) / Number(numstr.slice(i+1, index));
    }
    else{
      result = Number(numstr);
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    const units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];
    const index = input.search(/[a-zA-z]+/);
    
    if (index === -1){
      result = 'invalid';
    }
    else if (!units.includes(input.slice(index).toLowerCase())){
     result = 'invalid'; 
    }
    else{
      result = input.slice(index);
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit.toLowerCase()){
      case 'gal': 
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
        
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit.toLowerCase()){
      case 'gal': 
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
        
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var multiplier;
    
    switch(initUnit.toLowerCase()){
      case 'gal': 
        multiplier = galToL;
        break;
      case 'l':
        multiplier = 1/galToL;
        break;
      case 'lbs':
        multiplier = lbsToKg;
        break;
      case 'kg':
        multiplier = 1/lbsToKg;
        break;
      case 'mi':
        multiplier = miToKm;
        break;
      case 'km':
        multiplier = 1/miToKm;
        break;
        
    }
    
    return Math.round(multiplier*initNum*10**5)/10**5;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
