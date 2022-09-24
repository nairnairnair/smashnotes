
const getCharacterData = () => {
fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": "http://smashlounge.com/api/chars/all"
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
}

export default getCharacterData