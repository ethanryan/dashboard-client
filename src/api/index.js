// for local server rails api:
const baseUrl = 'http://localhost:3000'

export function getUsers() {
  console.log('calling getUsers from baseUrl in api/index...')
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

export function getPropertiesTrump() {
  console.log('calling getProperties from trumpUrl in api/index...')
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



//jayz-db

// note: to run jayz-db at above server address,
// cd into jayz-db and run:
// rails s -p 3003

const jayzUrl = 'http://localhost:3003'

export function getPropertiesJayZ() {
  console.log('calling getProperties from jayzUrl in api/index...')
  return fetch(`${jayzUrl}/properties`, {
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
