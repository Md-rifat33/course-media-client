import React, { useState, useEffect } from 'react';
import { useTheme } from '~/components/contexts/ThemeContext';
import { useAuthState } from '~/components/contexts/UserContext';
import { useAuth } from '~/lib/firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useAuthState();
  const { useDarkTheme, useLightTheme } = useTheme();

  const handleLogOut = () => {
    const auth = useAuth();
    auth.signOut();
  };

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    auth.languageCode = 'ja';

    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    if (toggle) {
      useDarkTheme();
    } else {
      useLightTheme();
    }
  }, [toggle]);

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Course Media
        </Link>
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0 gap-1">
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
            </ul>
          </div>
          {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? (
            <a className="btn" onClick={handleLogin}>
              Login
            </a>
          ) : (
            <div className="dropdown dropdown-end">
              <div className="tooltip tooltip-left" data-tip={state.currentUser.displayName}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={state.currentUser.photoURL ?? undefined} />
                  </div>
                </label>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
                <li onClick={() => setToggle((val) => !val)}>
                  <div className="form-control">
                    <label className="label cursor-pointer flex gap-x-2">
                      <span className="label-text ml-3">Dark Mode</span>
                      <input type="checkbox" className="toggle" checked={toggle} onChange={() => null} />
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
