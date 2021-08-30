import { Link, useHistory } from 'react-router-dom'
import './Cars.css'

export default function Cars(props) {
  const { cars, handleDelete, currentUser } = props
  const history = useHistory()

  return (
    <div className='car-page'>
    <h3>cars</h3>
      {cars.map((car) => (
        <div key={car.id} onClick= {() => (
          history.push(`/cars/${car.id}`))}>
          <img src={car.image_url} />
            <p>{car?.name}</p> 
  
          {currentUser?.id === car.user_id && (
            <div>
              <Link to={`/cars/${car.id}/edit/`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(car.id)}>Delete</button>
            </div> 
        )}
        </div>
      ))} 
      <Link to='/cars/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
