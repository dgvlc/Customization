import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import './CarEdit.css'

export default function CarEdit(props) {
  const [formData, setFormData] = useState({
    name: '', image_url: ''
  })
  const {cars, handleUpdate} = props;
  const {id} = useParams();

  useEffect(()=> {
    const prefillFormData = () => {
      const carItem = cars.find((car)=> car.id === Number(id));
      setFormData({ name: carItem.name, image_url: carItem.image_url })
    }
    if (cars.length) {
      prefillFormData()
    }
  }, [cars, id])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className='edit-form'
    onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}>
      <label>
        Name:
        <input 
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange}
        />
      </label>
      <label>
        Image_Url:
        <input 
          type='text' 
          name='image_url' 
          value={formData.image_url} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}