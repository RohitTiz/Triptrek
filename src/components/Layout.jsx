import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout