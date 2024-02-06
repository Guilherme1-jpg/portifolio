import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/home/index'
import ExperiencesAbout from '../pages/experiences'

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portifolio" element={<Home />} />
        <Route path="/experiences" element={<ExperiencesAbout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPages
