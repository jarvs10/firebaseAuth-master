import { useState } from 'react'
import Layout from './Layout'
import { useAuth } from '../context/AuthContextProvider'
import { Link, useNavigate } from 'react-router-dom'
import Alert from './Alert'

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('');

  const { login, loginGoogle, resetPassword } = useAuth();

  const navigate = useNavigate();

  const handleData = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
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

  const handleGooglelogin = async () => {
    await loginGoogle();

    navigate('/');
  }

  const handleResetPassword = async () => {
    if(!user.email) {
      setError('Please enter your email');

      setTimeout(() => {
        setError('');
      }, 5000);
    }

    try {
      await resetPassword(user.email);
      setError('We sent you a email with a link to reset your password');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center mb-10">Login</h1>

      <form onSubmit={handleSubmit} className='mx-auto w-1/3 bg-white py-10 px-6 rounded-md'>
        <div className='mb-4'>
          <label className='block font-bold mb-1 text-lg' htmlFor="email">Email: </label>
          <input onChange={handleData} className='border border-gray-400 w-full py-2 px-1 rounded-sm' type="email" name="email" id="email" placeholder='Email@gmail.com' />
        </div>

        <div className='mb-6'>
          <label className='block font-bold mb-1 text-lg' htmlFor="password">Password: </label>
          <input onChange={handleData} className='border border-gray-400 w-full py-2 px-1 rounded-sm' type="password" name="password" id="password" placeholder='********' />
        </div>

        <div className='flex justify-between items-center'>
          <button className='py-2 px-10 bg-slate-600 text-white hover:bg-slate-800 rounded-sm font-bold uppercase'>Login</button>
          <a href='#' onClick={handleResetPassword} className='font-bold uppercase text-gray-600 hover:text-slate-800'>Reset Password</a>
        </div>

        {error && <Alert>{error}</Alert>}

        <div className='flex justify-between mt-5 border-t-2 py-2'>
          <p className='font-semibold'>Dont have an Account?</p>
          <Link to={'/register'} className='font-bold uppercase'>Register</Link>
        </div>

      </form>

      <button className='bg-indigo-600 mt-8 block mx-auto py-2 px-4 text-white font-bold hover:bg-indigo-800 rounded-sm' onClick={handleGooglelogin}>Google Login</button>

    </Layout>
  )
}

export default Login