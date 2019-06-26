import request from "superagent";

const apiBaseUrl = "https://api.imgflip.com/get_memes";

export function getMemes() {
  return request.get(apiBaseUrl).then(response => response.body.data.memes);
}
