import request from 'superagent'

const apiBaseUrl = 'http://xkcd.com/'
// const apiBaseUrl = 'http://xkcd.com/614/info.0.json '


export function getXkcd(id) { 
  return request.get('/api/xkcd/' + id)
    .then(response => {
        console.log(response.body)
        return response.body
    })
}