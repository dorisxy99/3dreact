import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <>

      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <div className="container">
          <div className="row">
            <div className="navbar-inner">
              <h5 className="my-0 mr-md-auto font-weight-normal">Tapi Chulo's</h5>
              <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="/">Market</a>
                <a className="p-2 text-dark" href="/create">Create</a>
                <a className="p-2 text-dark" href="/community">Community</a>
                <a className="p-2 text-dark" href="/spaces">Spaces</a>
                <a className="p-2 text-dark" href="/search">Search</a>
                {props.user?
                <>
                  <span>Welcome, {props.user.name}</span> 
                  <Link to="/" onClick={handleLogOut}>Log Out</Link>
                  </>
                  :
                  <a className="btn btn-outline-primary" href="/login">Log In</a>
                }
              
                
              </nav>
            
            </div>

          </div>
        </div>

      </div>
    </>
  );
}