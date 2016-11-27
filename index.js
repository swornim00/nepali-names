'use strict';

let UniqueRandomArray = require('unique-random-array');
let femaleNames = require('./female-names.json');
let maleNames = require('./male-names.json')
let nameList = [femaleNames,maleNames];

exports.all = nameList;
exports.randomMale = UniqueRandomArray(maleNames);
exports.randomFemale = UniqueRandomArray(femaleNames);
exports.allMale = maleNames;
exports.allFemale = femaleNames;
