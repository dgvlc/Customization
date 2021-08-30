import {useState} from 'react'


export default function Upgrades(props) {
  const [formData, setFormData] = useState ({})
  const { upgrades } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, 
    }))
  }
  
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
