import dbData from '../database/inventory.json'

const soldData = dbData.filter(e => e.Status.includes('Sold'))

export const getAllVehicles = () => {
  try {
    return soldData
  } catch (error) {
    console.log(error)
    return {}
  }
}

export const vehiclesSearch = (params: object): any => {
  let result = soldData
  try {
    for (const [key, value] of Object.entries(params)) {
      result = result.filter((e: typeof soldData[0]) => e[key as keyof typeof e].includes(value))
    }
    return result
  } catch (error) {
    console.log(error)
    return {}
  }
}

module.exports
