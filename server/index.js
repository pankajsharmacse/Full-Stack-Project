import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import axios from 'axios'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const SPRING_BASE = process.env.SPRING_BASE || 'http://localhost:8082'

app.get('/api/hello', async (req, res) => {
  try {
    const r = await axios.get(`${SPRING_BASE}/api/hello`)
    res.json(r.data)
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message })
  }
})

app.post('/api/echo', async (req, res) => {
  try {
    const r = await axios.post(`${SPRING_BASE}/api/echo`, req.body)
    res.json(r.data)
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message })
  }
})

const PORT = process.env.PORT || 8081
app.listen(PORT, () => console.log(`Node server listening on ${PORT}`))
