import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const {signInUser, signInWithGoogle} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault(); 
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
            navigate('/');
        })
        .catch(error => {
            console.log('Error', error)
        })
    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
        .then((result)=>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl mb-3 font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  name="password"  placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New to this website?  <Link to={'/signup'}>Signup</Link> </p>
                        
                        <button onClick={handleSignInWithGoogle} className='btn btn-ghost'>Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;