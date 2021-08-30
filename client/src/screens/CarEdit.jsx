import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function CarEdit(props) {
  const [formData, setFormData] = useState({})
  const {cars, handleUpdate} = props;
  const {id} = useParams();

  useEffect(()=> {
    const prefillFormData = () => {
      const carItem = cars.find((car)=> car.id === Number(id));
      setFormData({ name: carItem.name })
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
    <form
    onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}
      >
      <label>
        Name:
        <input 
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}