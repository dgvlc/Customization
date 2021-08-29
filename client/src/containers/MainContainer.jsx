import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllCars, postCar, putCar, deleteCar } from '../services/cars';
import { getAllUpgrades, postUpgrade, addUpgradeToCar, deleteUpgrade} from '../services/upgrades';
import Upgrades from '../screens/Upgrades';
import Cars from '../screens/Cars';
import CarCreate from '../screens/CarCreate';
import CarEdit from '../screens/CarEdit';
import CarDetail from '../screens/CarDetail';

export default function Maincontainer(props) {
  const [cars, setCars] = useState([]);
  const [upgrades, setUpgrades] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchCars = async () => {
      const carList = await getAllCars();
      setCars(carList);
    };
    fetchCars();
  }, []);

  useEffect(() => {
    const fetchUpgrades = async () => {
      const upgradesList = await getAllUpgrades();
      setUpgrades(upgradesList);
    };
    fetchUpgrades();
  }, []);

  const handleCreate = async (formData) => {
    const carData = await postCar(formData);
    setCars((prevState) => [...prevState, carData]);
    history.push('/cars');
  };

  const handleUpdate = async (id, formData) => {
    const carData = await putCar(id, formData);
    setCars((prevState) =>
      prevState.map((car) => {
        return car.id === Number(id) ? carData : car;
      })
    );
    history.push('/cars');
  };

  const handleDelete = async (id) => {
    await deleteCar(id);
    setCars((prevState) => prevState.filter((car) => car.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route path='/upgrades'>
          <Upgrades upgrades={upgrades} />
        </Route>
        <Route path='/cars/:id/edit'>
          <CarEdit cars={cars} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/cars/new'>
          <CarCreate handleCreate={handleCreate} />
        </Route>
        <Route path='/cars/:id'>
          <CarDetail upgrades={upgrades} />
        </Route>
        <Route path='/cars'>
          <Cars
            Cars={Cars}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
