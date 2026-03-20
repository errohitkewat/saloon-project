
import HomePage from './Pages/HomePage/HomePage'
import About from './Pages/About/About'
import { Route, Routes } from 'react-router-dom'
import Services from './Pages/Services/Services'
import BookOnline from './Pages/BookOnline/BookOnline'
import Contact from './Pages/Contact/Contact'
import Navbar2 from './components/Layout/navbar/Navbar2'


function App() {

  return (
    <div className='min-h-screen' id='main'>
      <Navbar2 />
        <Routes >
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/bookonline' element={<BookOnline />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  )
}


export default App
