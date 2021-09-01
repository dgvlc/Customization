import { useState } from 'react'
import './Upgrades.css'


export default function Upgrades(props) {
  const [formData, setFormData] = useState({})
  const {
    name,
    image_url,
  } = formData;
  
  const { handleCreateUpgrade } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, 
    }))
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const carItem = await addUpgradeToCar(id, selectedUpgrade);
  //   setCarItem(carItem);
  // };

  
  return (
    <div>
      <form className='upgrade-form'
        onSubmit={(e) => {
          e.preventDefault()
          handleCreateUpgrade(formData)
        }}>
        <h3>Upgrade your car</h3>
        <label>
        Name:
        <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <label>
        Image-Url:
        <input type='text' name='image_url' value={image_url} onChange={handleChange} />
      </label>
      <button >Submit</button>

      </form>
    </div>
  )
}
