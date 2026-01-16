import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import DestinationDetail from './pages/DestinationDetail'
import PackageDetail from './pages/PackageDetail'
import Payment from './pages/Payment'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<HomePage />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path="/package/:id/payment" element={<Payment />} />
      </Routes>
    </Router>
  )
}

export default App