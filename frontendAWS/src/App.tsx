import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import PremCont from "./components/PremCont"

function App() {

  return (
    <div>
      <BrowserRouter>
        <div className="header">
          <NavLink className="active" to={'/'}>Home</NavLink>
          <NavLink className="active" to={'/register'}>Register</NavLink>
          <NavLink className="active" to={'/login'}>Login</NavLink>
          <NavLink className="active" to={'/premium-content'}>Premium Content</NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/premium-content' element={<PremCont/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App
