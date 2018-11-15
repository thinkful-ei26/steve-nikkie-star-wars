'use strict'

const axios = require('axios')
const colors = require('colors')

//this will be the search term
const searchTerm = process.argv[2]

axios
  .get(`https://swapi.co/api/people/?search=${searchTerm}`)
  .then(person => {
    const name = person.data.results[0].name
    console.log(name + 'has been found'.red)

    const filmsArray = person.data.results[0].films
    const promiseArray = filmsArray.map(url => {
      return axios.get(`${url}`)
    })

    return Promise.all(promiseArray)
  })
  .then(film => {
    console.log("And these are the films he's appeard in: ".blue)
    film.forEach(element => {
      console.log(element.data.title)
    })
  })
