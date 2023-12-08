import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import swal from 'sweetalert';

const Login = () => {
    const [error, setError] = useState('')

    const { signIn, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
            .then(res => {
                swal("Good job!", "Successfully logged!", "success");
                navigate(location?.state ? location.state : '/')
                setError('')
            })
            .catch(error => setError('Invalid email or password'))
    }

    const handleGoogle = () => {
        googleLogin()
        .then(res => {
            console.log(res.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='text-center'>
            <h2 className='text-3xl my-10 text-center'>Please Login</h2>
            {error && <p className='text-red-500'>{error}</p>}
            <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-cyan-200">Login</button>
                </div>
            </form>
            <button onClick={handleGoogle} className='btn bg-cyan-300 mt-2'>Login with Google <i className="bi bi-google"></i></button>

            <p className='mt-4'>Do not have an account? <Link to='/register' className='text-blue-500'>Register</Link></p>

        </div>
    );
};

export default Login;