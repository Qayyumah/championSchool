import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import AboutPage from "./components/AboutPage"
import AcademicsPage from "./components/AcademicsPage"
import ActivitiesPage from "./components/ActivitiesPage"
import AdmissionPage from "./components/AdmissionPage"
import GalleryPage from "./components/GalleryPage"
import ContactPage from "./components/ContactPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
