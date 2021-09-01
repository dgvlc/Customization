import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneCar } from '../services/cars';
import { addUpgradeToCar } from '../services/upgrades';
import './CarDetail.css'


export default function CarDetail(props) {
  const [carItem, setCarItem] = useState(null);
  const [selectedUpgrade, setSelectedUpgrade] = useState('');
  const { id } = useParams();
  const {handleDelete} = props;

  useEffect(() => {
    const fetchCarItem = async () => {
      const carData = await getOneCar(id);
      setCarItem(carData);
    };
    fetchCarItem();
  }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedUpgrade(value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const carItem = await addUpgradeToCar(id, selectedUpgrade);
  //   setCarItem(carItem);
  // };

  return (
    <div className='detail-page'>
      
      <h3 className='detail-title'>{carItem?.name}</h3>
      <div className='base-div'>
      <div className='image-div'>
          <img className='image' src={carItem?.image_url} />
      </div>
      <div className='info-div'>
      <p>Make: {carItem?.make}</p>
      <p>Model: {carItem?.model}</p>
      <p>Year: {carItem?.year}</p>
      <p>Description: {carItem?.description}</p>
      <p>Color: {carItem?.color}</p>
      <p>Base Price: {carItem?.base_price}</p>
        </div>
        <div className='buttons'>
              <Link to={`/cars/${id}/edit`}>
                <button>Edit</button>
        </Link>
        {/* <Link to={'/cars'}> */}
          <button onClick={() => handleDelete(carItem?.id)}>Delete</button>
        {/* </Link> */}
            </div> 
      </div>
      {carItem?.upgrades.map((upgrade) => (
        <div className='upgrade-div' key={upgrade.id}>
          <div className='upgrade-image-div'>
            <img className='upgrade-image' src={upgrade.image_url} />
          </div>
          <div className='upgrade-info'>
          <p>{upgrade.name}</p>
          <p>{upgrade.description}</p>
          <p> Cost: {upgrade.price}</p>
            <p>{upgrade.upgrade_type}</p>
          </div>
        </div>
      ))}
      <Link to='/upgrades'>
        <button>Add Upgrades</button>
      </Link>
            {/* <div className='buttons'>
              <Link to={`/cars/${id}/edit`}>
                <button>Edit</button>
        </Link>
        <Link to={'/cars'}>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </Link>
            </div>  */}
    </div>
  )
}
