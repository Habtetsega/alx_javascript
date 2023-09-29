#!/usr/bin/node
const r = require('request');
const url = "https://swapi-api.alx-tools.com/api/films/:id";
r(url, (error, response, body)=>{
	if (error){
		console.error('Error:', error);
	}else{
		const movie = JSON.parse(body);
		console.log(movie.title);
	}
});
