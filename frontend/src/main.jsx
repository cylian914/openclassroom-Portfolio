import { createRoot } from 'react-dom/client'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router'

import Nav from './part/nav/Nav.jsx'

import Apropos from './pages/Apropos/Apropos.jsx'
import Index from './pages/index/Index.jsx'
import Projects from './pages/projects/Projects.jsx'
import Competence from './pages/compt/Competance.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Nav/>}>
        <Route path="/" element={<Index />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Competences" element={<Competence />}></Route>
        <Route path="/Apropos" element={<Apropos />}></Route>
      </Route>

    </Routes>
  </BrowserRouter>
)
