import {useState}from 'react'
import './CarCreate.css'

export default function CarCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
    make: '',
    model: '',
    year: '',
    description: '',
    color: '',
    base_price: '',
  });

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

  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className='create-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}  
    >
      <h3 className='create-title'>Create a Car</h3>
      <div className='input-div'>
      <label>
        Name: 
        <input type='text' name='name' value={name} onChange={handleChange} />
      </label>
      <label>
        image url:
        <input type='text' name='image_url' value={image_url} onChange={handleChange} />
      </label>
      <label>
        make:
        <input type='text' name='make' value={make} onChange={handleChange} />
      </label>
      <label>
        model:
        <input type='text' name='model' value={model} onChange={handleChange} />
      </label>
      <label>
        year:
        <input type='text' name='year' value={year} onChange={handleChange} />
      </label>
      <label>
        description:
        <input type='text' name='description' value={description} onChange={handleChange} />
      </label>
      <label>
        color:
        <input type='text' name='color' value={color} onChange={handleChange} />
      </label>
      <label>
        base price:
        <input type='text' name='base_price' value={base_price} onChange={handleChange} />
      </label>
      </div>
      <div className='input-div'>
        <button className='input-button'>Submit</button>
      </div>
    </form>
  );
}
