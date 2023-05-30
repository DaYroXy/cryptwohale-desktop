import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import Settings from "./pages/Settings"
import ApisPage from "./pages/SettingsOutlets/ApisPage"
import TwitterPage from "./pages/SettingsOutlets/TwitterPage"
import DefaultsPage from "./pages/SettingsOutlets/DefaultsPage"

import MenuBar from "./components/MenuBar"
import NavBar from "./components/NavBar"

// import test from "./test/test.js"
// test()

function App() {
  return (
    <HashRouter>
        <MenuBar />
        <NavBar />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Settings" element={<Settings />}>
            <Route index element={<DefaultsPage />}/>
            <Route path="apis" element={<ApisPage />}/>
            <Route path="twitter" element={<TwitterPage />}/>
          </Route>
        </Routes> 
    </HashRouter>
  )
}

export default App
