import './App.css'
import Details from './components/Details'
import Favourites from './components/Favourite'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
      <Navbar />
      <Routes>
        <Route
        path='/Recipe-app/'
        element={
          <Home />
        }
        ></Route>
        <Route
        path='/Recipe-app/favourites'
        element={
          <Favourites />
        }
        ></Route>
        <Route
        path='/Recipe-app/recipe-item/:id'
        element={
          <Details />
        }
        ></Route>
      </Routes>

    </div>
    </>
  )
}

export default App
