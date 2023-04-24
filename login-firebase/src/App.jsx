import Layout from "./components/Layout"
import { useAuth } from "./context/AuthContextProvider"

function App() {

  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  }

  if(loading){
    return (
      <h1>Loading.....</h1>
    )
  }

  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center mb-9">Home</h1>

      <div>
        <h3 className="text-center font-bold text-2xl uppercase">Welcome <span className="font-semibold normal-case">{user.email}</span></h3>

        <button onClick={handleLogout} className="bg-slate-400 text-center py-2 px-6 uppercase font-bold block mx-auto mt-2">Logout</button>
      </div>

    </Layout>
  )
}

export default App
