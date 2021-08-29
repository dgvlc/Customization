import api from './api-config'

export const getAllCars = async () => {
  const resp = await api.get('/cars')
  return resp.data
}

export const getOneCar = async (id) => {
  const resp = await api.get(`/cars/${id}`)
  return resp.data 
}

export const postCar = async (carData) => {
  const resp = await api.post('/cars', { car: carData })
  return resp.data
}

export const putCar = async (id, carData) => {
  const resp = await api.put(`/cars/${id}`, { car: carData })
  return resp.data
}

export const deleteCar = async (id) => {
  const resp = await api.delete(`/cars/${id}`)
  return resp
}
