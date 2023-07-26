import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import SignUpForm from './components/Form/SignUpForm' 
import Landing from './pages/Landing/Landing'

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signUp' element={<SignUpForm />} />
    </Routes>
    </>

  )
}

export default App
