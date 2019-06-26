import request from 'superagent'

const apiBaseUrl = 'http://xkcd.com/'
// const apiBaseUrl = 'http://xkcd.com/614/info.0.json '


export function getXkcd(id) { 
  return request.get(apiBaseUrl + id + '/info.0.json')
    .then(response => response.body)
}