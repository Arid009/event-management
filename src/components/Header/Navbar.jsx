import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
    }

    const links = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
            }>Home</NavLink></li>
        <li><NavLink to='/aboutus'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
            }>About us</NavLink></li>
        <li><NavLink to='/portfolio'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
            }>Portfolio</NavLink></li>
    </>

    return (
        <div className="navbar bg-cyan-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/'><button className="btn btn-ghost normal-case text-xl">Entertainment Events</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className="invisible flex justify-center items-center space-x-3 mr-5 lg:visible">
                    <p className="mr-2 text-[18px]">{user?.displayName}</p>
                    {user?.photoURL ? <div className="h-[40px]">
                        <img className="rounded-full w-[40px] h-[40px]" src={user?.photoURL} alt="" />
                    </div>
                        : <div className="h-[40px]">
                            <img className="rounded-full w-[40px] h-[40px]" src='/user.jpg' alt="" />
                        </div>}
                </div>}
                {user ? <button onClick={handleLogOut} className="btn bg-cyan-200 border-none">Log out</button> : <Link to='/login'><button className="btn bg-cyan-200 border-none">Login</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;