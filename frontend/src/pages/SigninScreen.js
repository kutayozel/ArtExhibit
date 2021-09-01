import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function SigninScreen() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) =>{
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Email address</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <button className="primary" type="submit">Sign In</button>
        </div>
        <div>
          <label htmlFor=""></label>
          <div>
            New customer? {' '}
            <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  )
}