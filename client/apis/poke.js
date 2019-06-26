import request from 'superagent'

const apiBaseUrl = 'https://pokeapi.co/api/v2/'

export function getPokemon(id) {
    return request.get(apiBaseUrl + 'pokemon/' + id)
    .then(response => {
        const details = response.body
        return details
    })
}