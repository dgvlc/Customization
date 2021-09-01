import { Link, useHistory } from 'react-router-dom'
import './Cars.css'

export default function Cars(props) {
  const { cars} = props
  const history = useHistory()

  return (
    <div className='car-page'>
    <h3 className='cars-title'>Cars on the Shop</h3>
      {cars.map((car) => (
        <div className='cars-div' key={car.id} onClick= {() => (
          history.push(`/cars/${car.id}`))}>
          <div className='image-div'>
          <p>{car?.name}</p>
            <img className='car-image' src={car?.image_url} alt={car?.make} />
          </div>
          <div className='information-div'>
          <p>Make: {car?.make}</p>
          <p>Model: {car?.model}</p>
          <p>Year: {car?.year}</p>
          <p>Description: {car?.description}</p>
          <p>Color: {car?.color}</p>
            <p>Base Price: {car?.base_price}</p>
          </div>
        </div>
      ))}
      <div className='create-div'>
      <Link className='create-link' to='/cars/new'>
        <button className='create-button'>Create a built</button>
        </Link>
      </div>
    </div>
  )
}
