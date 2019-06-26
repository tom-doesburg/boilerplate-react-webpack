import request from 'superagent'


const apiBaseUrl = 'https://swapi.co/api/'


export function getPeople() {
  return request.get(apiBaseUrl + 'people/')
    .then(response => {
      const details = response.body.results
      return details
    })
}


