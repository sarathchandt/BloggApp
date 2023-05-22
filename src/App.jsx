import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PrivateRoutes from './Pages/PrivateRoutes';
import Profile from './Pages/Profile';

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route element={<PrivateRoutes/>}>
        <Route path='/profile' element={<Profile/>}/>
        </Route>

        </Routes>
        </Router>
    </>
  )
}

export default App
