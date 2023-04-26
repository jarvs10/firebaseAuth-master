import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='bg-slate-200 h-screen mx-auto'>

      <Navbar />
      
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout