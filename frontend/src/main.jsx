import { createRoot } from 'react-dom/client'
import './main.css'
import Index from './pages/index/Index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Nav from './part/nav/Nav.jsx'
import Projects from './pages/projects/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Nav/>}>
        <Route path="/" element={<Index />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
      </Route>

    </Routes>
  </BrowserRouter>
)
