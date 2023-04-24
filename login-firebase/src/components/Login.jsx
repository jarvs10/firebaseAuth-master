import { useState } from 'react'
import Layout from './Layout'
import { useAuth } from '../context/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert'

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('');

  const {login} = useAuth();

  const navigate = useNavigate();

  const handleData = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.email, user.password);
      navigate('/');

    } catch (error) {
      setError(error.message);

      setTimeout(() => {
        setError('');
      }, 3000);
    }
  }


  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center mb-10">Login</h1>

      <form onSubmit={handleSubmit} className='mx-auto w-1/2 bg-white py-8 px-4 rounded-md'>
        <div className='mb-4'>
          <label className='block font-bold mb-1 text-lg' htmlFor="email">Email: </label>
          <input onChange={handleData} className='border border-gray-400 w-full py-2 px-1 rounded-sm' type="email" name="email" id="email" placeholder='Email@gmail.com' />
        </div>

        <div className='mb-6'>
          <label className='block font-bold mb-1 text-lg' htmlFor="password">Password: </label>
          <input onChange={handleData} className='border border-gray-400 w-full py-2 px-1 rounded-sm' type="password" name="password" id="password" placeholder='********' />
        </div>

        <button className='py-2 w-full bg-slate-600 text-white hover:bg-slate-800 rounded-sm font-bold uppercase'>Register</button>
        {error && <Alert>{error}</Alert>}
      </form>
    </Layout>
  )
}

export default Login