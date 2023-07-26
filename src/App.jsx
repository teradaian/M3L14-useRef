import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import SignUpForm from './components/SignUpForm/SignUpForm' 
import Landing from './pages/Landing/Landing'

import './App.css'

function App() {
  const [users, setUsers] = useState([])

  function handleAddUser(formData){
    setUsers([...users, formData])
  }

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Landing users={users} />} />
      <Route path='/signUp' element={<SignUpForm handleAddUser={handleAddUser} />} />
    </Routes>
    </>

  )
}

export default App
