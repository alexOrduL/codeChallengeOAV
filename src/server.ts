import express from 'express'
import util from './util'
import indexRouter from '../routes/index'

const app = express()
const port = util.config.default.PORT

// Routes
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`\nServer run  ning on ---> http://localhost:${port}\n`)
})

export default app
