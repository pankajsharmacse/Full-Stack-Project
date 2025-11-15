import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHello, sendEcho } from './features/apiSlice'

export default function App() {
  const dispatch = useDispatch()
  const { hello, echoResponse, loading, error } = useSelector(s => s.api)
  const [message, setMessage] = useState('')

  return (
    <div style={{ maxWidth: 640, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>React + Redux -&gt; Node -&gt; Spring</h1>

      <section style={{ marginBottom: 24 }}>
        <h2>GET /api/hello</h2>
        <button onClick={() => dispatch(fetchHello())} disabled={loading}>Call GET</button>
        <div style={{ marginTop: 8 }}>
          <strong>Result:</strong> <pre>{hello ? JSON.stringify(hello, null, 2) : '—'}</pre>
        </div>
      </section>

      <section>
        <h2>POST /api/echo</h2>
        <form onSubmit={(e) => { e.preventDefault(); dispatch(sendEcho({ message })) }}>
          <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message" />
          <button type="submit" disabled={loading}>Send POST</button>
        </form>
        <div style={{ marginTop: 8 }}>
          <strong>Response:</strong> <pre>{echoResponse ? JSON.stringify(echoResponse, null, 2) : '—'}</pre>
        </div>
      </section>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

