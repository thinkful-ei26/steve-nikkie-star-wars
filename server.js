'use strict'

const axios = require('axios')

//this will be the search term
const searchTerm = process.argv[2]

axios
  .get(`https://swapi.co/api/people/?search=${searchTerm}`)
  .then(person => {
    // console.log(person);
    console.log(person.data.results[0].name)
    const url = person.data.results[0].films[0]
    return axios.get(url)
  })
  .then(film => {
    console.log(film.data.title)
  })
