const getAppts = () => {
  return fetch('http://localhost:3001/appointments')
  .then(response => response.json())
}

const postAppt = (newAppt) => {
  return fetch('http://localhost:3001/appointments', 
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(newAppt)
  })
  .then(response => response.json())
  .catch(error => console.log(error))
}

export { getAppts, postAppt }