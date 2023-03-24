import cron from 'node-cron'
import csvtojson from 'csvtojson'
import fs from 'fs'

const csvFilePath = __dirname + '/inventory.csv'

cron.schedule('*/5 * * * * ', () => {
  csvtojson().fromFile(csvFilePath)
    .then((json: any) => {
      try {
        fs.writeFileSync('database/inventory.json', JSON.stringify(json, null, 4), 'utf-8')
        console.log('Cron Its Ok')
      } catch (error) {
        console.log(error)
      }
    })
})
