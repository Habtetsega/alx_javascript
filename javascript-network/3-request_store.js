#!/usr/bin/node
const r = require('require');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];
r(url, (error, response, body)=>{
	if (error){
		console.log("Error:",error);
	}else if(response.statusCode!==200){
		console.lg("Stutus:",response.statusCode);
	
	}else{
		const file = JSON(response.body);
		fs.writeFile(path, body, 'utf-8', (error)=>{
			if(error){
				console.log("Error:",error)
			}else{
				console.log(response.body)
			}
		})
	}
})
