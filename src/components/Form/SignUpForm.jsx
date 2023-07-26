import { useState } from 'react'

import './SignUpForm.css'

const SignUpForm = ({ handleAddUser }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddUser(form)
  }

  return (
    <main className="new">
      <form autoComplete="off">
        <label htmlFor="username-input">Username</label>
        <input
          required
          type="text"
          name="username"
          id="username-input"
          placeholder="username"
          value={form.username}
          onChange={handleChange}
        />

        <label htmlFor="password-input">Password</label>
        <input
          required
          type="password"
          name="password"
          id="password-input"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <label htmlFor="confirm-password-input">Confirm Password</label>
        <input
          required
          type="password"
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