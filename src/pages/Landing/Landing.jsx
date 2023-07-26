const Landing = ({ users }) => {
  return (
    <div>
      { users.map(user => <h1 key={user.username}>{user.username}</h1>) }
    </div>
   );
}
 
export default Landing;