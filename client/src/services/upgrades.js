import api from './api-config'

export const getAllUpgrades = async () => {
  const resp = await api.get('/upgrades')
  return resp.data
}

export const postUpgrade = async (upgradeData) => {
  const resp = await api.post('/upgrades', { upgrade: upgradeData })
  return resp.data
}

export const addUpgradeToCar = async (carId, upgradeId) => {
  const resp = await api.get(`/cars/${carId}/upgrades/${upgradeId}`)
  return resp.data
}

export const deleteUpgrade = async (id) => {
  const resp = await api.delete(`/upgrades/${id}`)
  return resp
}