// for local server rails api:
const baseUrl = 'http://localhost:3000'

export function getUsers() {
  return fetch(`${baseUrl}/users`, {
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


//trump-db

// note: to run trump-db at above server address,
// cd into trump-db and run:
// rails s -p 3002

const trumpUrl = 'http://localhost:3002'

export function getProperties() {
  console.log('calling getProperties in api/index!!!')
  return fetch(`${trumpUrl}/properties`, {
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
