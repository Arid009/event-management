import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";


const Register = () => {
    const [error,setError] = useState('')
    const { createUser} = useContext(AuthContext)
    

    const handleRegister= e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')


        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password)){
            setError("Minimum six characters, at least one capital letter and one special character")
            return;
        } 
        else{
            setError("")
        }

        createUser(email,password)
        .then(res => {
            swal("Good job!", "Successfully registered!", "success");
            updateProfile(res.user, {
                displayName: name, photoURL: photo
            }).then(res => {
                console.log('ers', res);
            }).catch(err => {
                console.error(err);
            })
            setError('')
        })
        .catch(error => setError(error.message))

        
    }

    return (
        <div className="text-center">
            <h2 className='text-3xl my-10 text-center'>Please Register</h2>
            {error && <h2 className="text-red-500">{error}</h2>}
            <form onSubmit={handleRegister} className='md:w-3/4 mb-4 lg:w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="username" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="photoURL" name='photo' className="input input-bordered" />
                </div>
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
                    <button className="btn bg-cyan-200">Register</button>
                </div>
            </form>

            <p>Already have an account? <Link to='/login' className="text-blue-600">Login</Link></p>

        </div>
    );
};

export default Register;