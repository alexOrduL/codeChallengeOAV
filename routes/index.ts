import express from 'express'
import * as vehicleController from '../controllers/vehicles'
const router = express.Router()

router.get('/api/vehicles', (req, res) => {
  const params = req.query
  res.setHeader('Content-Type', 'application/json')

  if (Object.keys(params).length === 0) res.json(vehicleController.getAllVehicles())
  else res.send(vehicleController.vehiclesSearch(params))
})

export default router
