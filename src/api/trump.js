// for local server rails api:
const baseUrl = 'http://localhost:3002'

// note: to run trump-db at above server address,
// cd into trump-db and run:
// rails s -p 3002

export function getProperties() {
  return fetch(`${baseUrl}/properties`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'GET',
  })
  .then (response => response.json() )
}
