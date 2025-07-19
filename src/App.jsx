import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import OrderOnline from './Components/OrderOnline'
import Menu from './Components/Menu'
import About from './Components/About'
import Contact from './Components/Contact'
import Food from './Components/Food'
import Starters from './Components/MenuTabs/Starters'
import Mains from './Components/MenuTabs/Mains'
import Desserts from './Components/MenuTabs/Desserts'
import OwnMenu from './Components/MenuTabs/ownmenu'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/OrderOnline' element={<OrderOnline />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/About' element={<About />} />
            {/* <Route path='/Food' element={<Food />} /> */}
            {/* Assuming Food is a part of Home for this example */}
            <Route path='/Contact' element={<Contact />} />

            {/* Routes for the MenuTabs */}
            <Route path='/Menu/Starters' element={<Starters />} />
            <Route path='/Menu/Mains' element={<Mains />} />
            <Route path='/Menu/Desserts' element={<Desserts />} />
            {/* <Route path='/Menu/OwnMenu' element={<OwnMenu />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App