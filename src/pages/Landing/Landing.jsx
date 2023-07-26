const Landing = ({ users }) => {

  const usersList = users.map(user => (
    <h1 key={user.username}>
      {user.username}
    </h1>
  ))

  return (
    <section>
      <h1>{users.length > 0 && 'Users:' }</h1>
      { usersList }
    </section>
   )
}
 
export default Landing;