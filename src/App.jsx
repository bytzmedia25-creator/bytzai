import { Toaster } from 'sonner'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/landing/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WhyBytzAI from './pages/WhyBytzAI'
import Global from './pages/Global'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import PageNotFound from './lib/PageNotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why" element={<WhyBytzAI />} />
          <Route path="/global" element={<Global />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
