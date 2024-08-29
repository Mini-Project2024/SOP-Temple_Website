
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Header from './components/Header'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
