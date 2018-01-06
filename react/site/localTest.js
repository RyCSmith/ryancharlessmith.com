// var moment = require('moment');
// console.log("JA TAKK");

// var f = moment().hour(15).minute(13);
// console.log(f.minute());

// var path = "/create-booking-request/1/";
// path = path.substring(0, path.length -1);
// path = path.substring(path.lastIndexOf("/") + 1)
// console.log(path);
var React = require('react');
// var timeConstants = require('./js/timeConstants');

// var mm = {
// 	"test1": 1,
// 	"test2": 2,
// 	"test3": 3
// }
// mmm = new Map(JSON.parse(mm));
// console.log([...mm]);

// let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
// console.log(mmm);

const DURATION_OPTIONS_MAP = {
	60 : '1 hour',
	90 : '1.5 hours',
	120 : '2 hours' ,
	150 : '2.5 hours',
	180 : '3 hours'
};

console.log(DURATION_OPTIONS_MAP[60])
