import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyled } from './Navbar.styled'
import {
  auth,
} from '../../db/firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
  logout, selectUser,
} from '../../state/gameSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <NavbarStyled>
      <nav>
        <ul>
          <li><Link className="navbar-item" to="/">Inventory</Link></li>
          <li><Link className="navbar-item" to="/addgame">Add Game</Link></li>
          {user.user ?
            (<li><a className="navbar-item"onClick={logoutOfApp}>Logout</a></li>):
            (<li><Link className="navbar-item" to="/login">Login</Link></li>)
          }
          {!user.user && <li><Link className="navbar-item" to="/signup">Signup</Link></li>}

        </ul>
      </nav>
    </NavbarStyled>
  )
}

export default Navbar