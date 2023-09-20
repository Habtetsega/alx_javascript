#!/usr/bin/node
exports.callMeMoby = function (x, theFunction){
	let a =0;
	while (a<x){
		theFunction();
		a++;
	}
}
