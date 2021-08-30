import React from 'react'

export default function Upgrades(props) {
  const { upgrades } = props
  
  return (
    <div>
      <div>
      <h3>Upgrades</h3>
      {upgrades.map((upgrades) => (
        <p key={upgrades.id}>{upgrades.name}</p>
      ))}
    </div>
    </div>
  )
}
