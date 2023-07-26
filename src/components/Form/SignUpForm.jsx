import { useState } from 'react'

import './SignUpForm.css'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
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
        />

        <label htmlFor="password-input">Password</label>
        <input
          required
          type="password"
          name="password"
          id="password-input"
          placeholder="Password"
        />

        <label htmlFor="confirm-password-input">Confirm Password</label>
        <input
          required
          type="password"
          name="confirmPassword"
          id="confirm-password-input"
          placeholder="Confirm Password"
        />

        <button type="submit">SUBMIT</button>

      </form>
    </main>
  )
}
 
export default SignUpForm;