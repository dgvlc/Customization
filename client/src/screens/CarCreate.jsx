import {useState}from 'react'
import './CarCreate.css'

export default function CarCreate(props) {
  const [formData, setFormData] = useState({});
  const { name, image_url } = formData;
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
      <h3>Create a Car</h3>
      <label>
        Name:
        <input type='text' name='name' value={name} onChange={handleChange} />
      </label>
      <label>
        image_url:
        <input type='text' name='image_url' value={image_url} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
