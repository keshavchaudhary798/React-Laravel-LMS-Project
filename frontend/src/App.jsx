import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Courses from './components/pages/Courses'
import Details from './components/pages/Details'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import MyCourses from './components/account/MyCourses'
import WatchCourses from './components/account/WatchCourses'
import ChangePassword from './components/account/ChangePassword'
import MyLearning from './components/account/MyLearning'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/courses' element={<Courses/>} />
          <Route path='/details' element={<Details/>} />
          <Route path='/account/login' element={<Login/>} />
          <Route path='/account/register' element={<Register/>}/>
          <Route path='/account/my-courses' element={<MyCourses/>} />
          <Route path='/account/my-courses-enrolled' element={<MyLearning/>} />
          <Route path='/account/watch-course' element={<WatchCourses/>}/>
          <Route path='/account/change-password' element={<ChangePassword/>} />




          

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
