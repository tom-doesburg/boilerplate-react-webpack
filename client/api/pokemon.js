import request from 'superagent'


const apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/'

// export function getPokemon(name) {
//   return request.get(apiBaseUrl + name)
//     .then(response => response.body)
// }

export function getPokemon(name) {
  return request.get(apiBaseUrl)
    .then(response => response.body.results)
}