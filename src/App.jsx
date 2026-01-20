import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
import BlogPostPage from './pages/BlogPostPage'
import DestinationDetail from './pages/DestinationDetail'
import PackageDetail from './pages/PackageDetail'
import Payment from './pages/Payment'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/destinations" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/destination/:id" element={
          <Layout>
            <DestinationDetail />
          </Layout>
        } />
        <Route path="/package/:id" element={
          <Layout>
            <PackageDetail />
          </Layout>
        } />
        <Route path="/package/:id/payment" element={
          <Layout>
            <Payment />
          </Layout>
        } />
        <Route path="/blogs" element={
          <Layout>
            <BlogsPage />
          </Layout>
        } />
        <Route path="/blogs/:slug" element={
          <Layout>
            <BlogPostPage />
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App