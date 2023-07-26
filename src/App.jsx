import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Form from './components/Form/Form' 
import Landing from './pages/Landing/Landing'

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/new' element={<Form />} />
    </Routes>
    </>

  )
}

export default App
