import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import Settings from "./pages/Settings"

import MenuBar from "./components/MenuBar"
import NavBar from "./components/NavBar"


function App() {
  return (
    <HashRouter>
        <MenuBar />
        <NavBar />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="Settings" element={<Settings />} />
        </Routes> 
    </HashRouter>
  )
}

export default App
