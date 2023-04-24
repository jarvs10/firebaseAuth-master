import Layout from "./components/Layout"
import { useAuth } from "./context/AuthContextProvider"

function App() {

  const {user} = useAuth();

  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center mb-9">Home</h1>

      <h3 className="text-center font-bold text-2xl uppercase">Welcome <span className="font-semibold normal-case">{user.email}</span></h3>
    </Layout>
  )
}

export default App
