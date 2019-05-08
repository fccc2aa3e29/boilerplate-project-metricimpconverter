/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
    if (initUnit !== 'invalid' && !Number.isNaN(initNum)){
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    }
    
    if (Number.isNaN(initNum) && initUnit === 'invalid'){
      res.json({initNum: initNum, initUnit: initUnit, string: "invalid number and unit"});
    }
    else if (Number.isNaN(initNum)){
      res.json({initNum: initNum, initUnit: initUnit, string: "invalid number"});
    }
    else if (initUnit === 'invalid'){
      res.json({initNum: initNum, initUnit: initUnit, string: "invalid unit"});
    }
    else{
      res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});
    }
    
  });  
};
