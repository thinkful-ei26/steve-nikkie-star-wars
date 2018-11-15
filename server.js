
'use strict';

const axios = require('axios');

//this will be the search term 
const searchTerm = process.argv[2];
console.log(searchTerm);

axios.get(`https://swapi.co/api/people/?search=${searchTerm}`).then(person=>{
  // console.log(person);
  console.log(person.data.results[0].name);
});