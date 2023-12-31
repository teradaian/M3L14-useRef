import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './SignUpForm.css'

const SignUpForm = ({ handleAddUser }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  const handleChange = ({ target }) => {
    const newFormData = { ...form, [target.name]: target.value }
    setForm(newFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddUser(form)
    navigate('/')
  }

  return (
    <main className="new">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="username-input">Username</label>
        <input
          required
          minLength="8"
          type="text"
          name="username"
          id="username-input"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        

        <label htmlFor="password-input">
          Password (8 characters minimum)
          <i 
            className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} 
            onClick={() => setShowPassword(!showPassword)}>
          </i>
        </label>
        <input
          required
          minLength="8"
          type={showPassword ? "text" : "password"}
          name="password"
          id="password-input"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <label htmlFor="confirm-password-input">
          Confirm Password
          <i 
            className={`fa-solid ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`} 
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
          </i>
        </label>
        <input
          required
          minLength="8"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          id="confirm-password-input"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">SUBMIT</button>

      </form>
    </main>
  )
}
 
export default SignUpForm;