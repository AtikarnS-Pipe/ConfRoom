import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import Updateuser from './Updateuser'
import Createuser from './Createuser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<Updateuser />}></Route>
        <Route path='/update' element={<Createuser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
