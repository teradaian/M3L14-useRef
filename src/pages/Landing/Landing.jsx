const Landing = ({ users }) => {

  const usersList = users.map(user => (
    <h1 key={user.username}>
      {user.username}
    </h1>
  ))

  return (
    <div>
      { usersList }
    </div>
   );
}
 
export default Landing;