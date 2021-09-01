import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import './CarEdit.css'

export default function CarEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
    make: '',
    model: '',
    year: '',
    description: '',
    color: '',
    base_price: '',
  })
  const {cars, handleUpdate} = props;
  const { id } = useParams();
  const {
    name,
    image_url,
    make,
    model,
    year,
    description,
    color,
    base_price, 
  } = formData;


  useEffect(()=> {
    const prefillFormData = () => {
      const carItem = cars.find((car)=> car?.id === Number(id));
      setFormData({
        name: carItem.name,
        image_url: carItem.image_url,
        make: carItem.make,
        model: carItem.model,
        year: carItem.year,
        description: carItem.description,
        color: carItem.color,
        base_price: carItem.base_price, 
      })
    }
    if (cars.length) {
      prefillFormData()
    }
  }, [cars])

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
          value={name} 
          onChange={handleChange}
        />
      </label>
      <label>
        Make:
        <input 
          type='text' 
          name='make' 
          value={make} 
          onChange={handleChange}
        />
      </label>
      <label>
        model:
        <input 
          type='text' 
          name='model' 
          value={model} 
          onChange={handleChange}
        />
      </label>
      <label>
        Image_Url:
        <input 
          type='text' 
          name='image_url' 
          value={image_url} 
          onChange={handleChange}
        />
      </label>
      <label>
        Year:
        <input 
          type='text' 
          name='year' 
          value={year} 
          onChange={handleChange}
        />
      </label>
      <label>
        description:
        <input 
          type='text' 
          name='description' 
          value={description} 
          onChange={handleChange}
        />
      </label>
      <label>
        Color:
        <input 
          type='text' 
          name='color' 
          value={color} 
          onChange={handleChange}
        />
      </label>
      <label>
        Base Price:
        <input 
          type='text' 
          name='base_price' 
          value={base_price} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}