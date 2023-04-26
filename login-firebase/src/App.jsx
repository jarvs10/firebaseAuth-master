import Layout from "./components/Layout"
import { useAuth } from "./context/AuthContextProvider"

function App() {

  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  }

  if (loading) {
    return (
      <h1>Loading.....</h1>
    )
  }

  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center mb-9">Home</h1>

      <div className="bg-white shadow-md w-1/3 mx-auto py-4">
        <img className="w-32 mx-auto mb-2" src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg" alt="avatar" />

        <h3 className="text-center font-bold text-2xl uppercase">Welcome <span className="font-semibold normal-case">{user.email}</span></h3>

        <button onClick={handleLogout} className="bg-slate-600 hover:bg-slate-800 text-white text-center py-2 px-6 uppercase font-bold block mx-auto mt-2">Logout</button>
      </div>

    </Layout>
  )
}

export default App
