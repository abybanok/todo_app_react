import './App.css'
import {Routes, Route} from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'

function App(){

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<TaskPage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </div>
  )

}

export default App