import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_BASE = 'http://localhost:8081' // Node server

export const fetchHello = createAsyncThunk('api/fetchHello', async () => {
  const res = await axios.get(`${API_BASE}/api/hello`)
  return res.data
})

export const sendEcho = createAsyncThunk('api/sendEcho', async (payload) => {
  const res = await axios.post(`${API_BASE}/api/echo`, payload)
  return res.data
})

const apiSlice = createSlice({
  name: 'api',
  initialState: { hello: null, echoResponse: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHello.pending, (state) => { state.loading = true; state.error = null })
      .addCase(fetchHello.fulfilled, (state, action) => { state.loading = false; state.hello = action.payload })
      .addCase(fetchHello.rejected, (state, action) => { state.loading = false; state.error = action.error.message })
      .addCase(sendEcho.pending, (state) => { state.loading = true; state.error = null })
      .addCase(sendEcho.fulfilled, (state, action) => { state.loading = false; state.echoResponse = action.payload })
      .addCase(sendEcho.rejected, (state, action) => { state.loading = false; state.error = action.error.message })
  }
})

export default apiSlice.reducer
