import './SignUpForm.css'

const SignUpForm = () => {
  return (
    <main className="new">
      <form autoComplete="off">
        <label htmlFor="name-input">Username</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
        />

        <label htmlFor="name-input">Password</label>
        <input
          required
          type="password"
          name="name"
          id="name-input"
          placeholder="Name"
        />

        <label htmlFor="name-input">Confirm Password</label>
        <input
          required
          type="password"
          name="name"
          id="name-input"
          placeholder="Name"
        />

        <button type="submit">SUBMIT</button>

      </form>
    </main>
  )
}
 
export default SignUpForm;