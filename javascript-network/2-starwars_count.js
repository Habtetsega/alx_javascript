#!/usr/bin/node
const r = require('request');
const url = process.argv[2];
request(url, (error, response, body)=>{
	if (error){
		console.log("Error:", error);
	}else if(response.statusCode!==200){
		console.log("status:", response.stutusCode);
	}else{
		const film = JSON.parse(response.body);
		const wedge = film.filter(film => film.characters.includes("https://swapi-api.alx-tools.com/api/people/18/"))
		console.log(wedge.length)
	}
}
);
