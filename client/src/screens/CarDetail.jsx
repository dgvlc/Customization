import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneCar } from '../services/cars';
import { addUpgradeToCar } from '../services/upgrades';
import './CarDetail.css'


export default function CarDetail(props) {
  const [carItem, setCarItem] = useState(null);
  const [selectedUpgrade, setSelectedUpgrade] = useState('');
  const { id } = useParams();
  const { upgrades } = props;

  useEffect(() => {
    const fetchCarItem = async () => {
      const carData = await getOneCar(id);
      setCarItem(carData);
    };
    fetchCarItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedUpgrade(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carItem = await addUpgradeToCar(id, selectedUpgrade);
    setCarItem(carItem);
  };

  return (
    <div className='detail-page'>
      <h3>{carItem?.name}</h3>
      <img src={carItem?.image_url}/>
      {carItem?.upgrades.map(() => (
        <p key={upgrades.id}>
          {upgrades.name}
        </p>
      ))}
      <Link to='/upgrades'>
        <button>Add Upgrades</button>
      </Link>
      
    </div>
  )
}
