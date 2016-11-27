'use strict';

let UniqueRandomArray = require('unique-random-array');
let NepaliNames = require('./nepali-names.json');

exports.all = NepaliNames;
exports.random = UniqueRandomArray(NepaliNames);
