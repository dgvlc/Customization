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

  const handleCreateUpgrade = async (formData) => {
    const upgradeData = await postUpgrade(formData);
    setUpgrades((prevState) => [...prevState, upgradeData]);
    history.push('/cars/:id');
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

  const handleDeleteUpgrade = async (id) => {
    await deleteUpgrade(id)
    setUpgrades((prevState) => prevState.filter((upgrade) => upgrade.id !== id))
  }

  return (
    <div>
      <Switch>
        <Route path='/upgrades'>
          <Upgrades upgrades={upgrades}
            handleCreateUpgrade={handleCreateUpgrade}/>
        </Route>
        <Route path='/cars/:id/edit'>
          <CarEdit cars={cars} handleUpdate={handleUpdate}
        currentUser={currentUser} />
        </Route>
        <Route path='/cars/new'>
          <CarCreate handleCreate={handleCreate}
            currentUser={currentUser} />
        </Route>
        <Route path='/cars/:id'>
          <CarDetail upgrades={upgrades}
            currentUser={currentUser}
            handleDeleteUpdate={handleDeleteUpgrade}
            handleDelete={handleDelete}/>
          
        </Route>
        <Route exact path='/cars'>
          <Cars
            cars={cars}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
