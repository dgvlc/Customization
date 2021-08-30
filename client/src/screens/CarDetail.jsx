import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCar } from '../services/cars';
import { addUpgradeToCar } from '../services/upgrades';


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

  // Our handle submit for adding the flavor to our food
  const handleSubmit = async (e) => {
    e.preventDefault();
    const carItem = await addUpgradeToCar(id, selectedUpgrade);
    setCarItem(carItem);
  };

  return (
    <div>
      <h3>{carItem?.name}</h3>
      {carItem?.upgrades.map(() => (
        <p key={upgrades.id}>
          {upgrades.name}
        </p>
      ))}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>

        </select>
      </form>
      
    </div>
  )
}
