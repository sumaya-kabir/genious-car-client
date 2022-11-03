import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then (result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="hero min-w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-12">
                    <h1 className="text-4xl mt-5 font-bold text-center">Signup</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name"
                            name='name'
                            required
                            className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email"
                            required
                            name='email' 
                            className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password"
                            name='password'
                            required
                            className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error" type="submit" value="Signup" />

                        </div>
                    </form>
                    <p className='text-center'>
                        Already have an account? <Link className='text-orange-600 font-semibold' to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;