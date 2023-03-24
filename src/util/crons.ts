import cron from 'node-cron'
import readCsv from './readCsv''

cron.schedule(" */5 * * * * ", () => {
    readCsv
})