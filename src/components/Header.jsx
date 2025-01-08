import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, signOutUser } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = ()=>{
        signOutUser()
        .then(()=>{
            console.log('User log out successfully');
        })
        .catch((error)=>{
            console.log('Error', error.message)
        })
    }
    const links = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/signup'>SignUp</Link></li>
    {
        user&& <>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        </>
    }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Private-route</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? 
                    <>
                    <span>{user.email}</span>
                    <a onClick={handleLogOut} className="btn">Log Out</a>
                    </>
                    : 
                    <Link className='btn' to='/login'>Log In</Link>
                }
            </div>
        </div>
    );
};

export default Header;