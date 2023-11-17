import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import navBg from '../../assets/bg.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    return (<div style={{
        backgroundImage: `url(${navBg})`
    }} >
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-300  rounded-box w-52">
                        <li ><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/alltoys">All Toys</Link></li>
                        <li><Link to="/mytoys">My Toys</Link></li>
                        <li><Link to="/addtoy">Add Toys</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>


                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />

                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold text-white  px-1">
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/alltoys">All Toys</Link></li>
                    <li><Link to="/mytoys">My Toys</Link></li>
                    <li><Link to="/addtoy">Add Toys</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end mx-4">
                {
                    !user ? <>
                        <Link className=" text-white font-bold mx-2" to='login'>Login</Link> <span className="text-white  ">/</span>
                        <Link to='/signup' className="mx-2 font-bold text-white">Sign Up</Link>
                    </> :
                        <>
                            <img width="50px" title={user?.displayName} height='50px' className=" rounded-full mx-1 " src={user?.photoURL} alt="" />
                            <button onClick={logOut} className="btn bg-red-600 text-white">Log Out</button>
                        </>
                }
            </div>
        </div>
    </div>
    );
};

export default Navbar;