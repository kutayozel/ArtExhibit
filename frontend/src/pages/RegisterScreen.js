import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { register } from '../actions/userActions'
import Loading from '../components/Loading'
import MessageBox from '../components/MessageBox'

export default function RegisterScreen(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/'
  
  const userRegister= useSelector((state) => state.userRegister)
  const { userInfo, loading, error } = userRegister

  
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('password and confirm password are not match')
    } else {
      dispatch(register(name, email, password))
    }
  }
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [props.history, userInfo, redirect])
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Create Account</h1>
        </div>
        {loading && <Loading></Loading>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          />
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
          <label htmlFor="confirmPassword">Email address</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <button className="primary" type="submit">Register</button>
        </div>
        <div>
          <label htmlFor=""></label>
          <div>
            Already have and account? {' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign-in</Link>
          </div>
        </div>
      </form>
    </div>
  )
}