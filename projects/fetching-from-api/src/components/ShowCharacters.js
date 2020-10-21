import React from 'react'

const ShowCharacters = props => {

  const {name, height, mass} = props.data
  
  return (
    <div>
      <p>{name}</p>
      <p>Height (cm) {height}</p>
      <p>Body mass (kg) {mass}</p>
    </div>
  )
}

export default ShowCharacters