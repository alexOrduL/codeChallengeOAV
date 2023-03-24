/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable n/no-path-concat */
import cron from 'node-cron'
import csvtojson from 'csvtojson'
import fs from 'fs'

const csvFilePath = __dirname + '/inventory.csv'

// we generate a cron that will run every 5 minutes
cron.schedule('*/5 * * * * ', () => {
  csvtojson().fromFile(csvFilePath)
    .then((json: any) => {
      // Parce the csv to json and save it on db/inventory
      try {
        fs.writeFileSync('database/inventory.json', JSON.stringify(json, null, 4), 'utf-8')
        console.log('Cron Its Ok')
      } catch (error) {
        console.log(error)
      }
    })
})
