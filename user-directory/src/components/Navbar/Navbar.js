import React from 'react';
import './style.css'; 



function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                User Chooser
            </a>
            <div className="searchbox d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search by first name" aria-label="Search"id="first"onChange={props.handleChange}/>
            <input className="form-control mr-sm-2" type="search" id="last" placeholder="Search by last name" aria-label="Search" onChange={props.handleChange}/>
            </div>
        </nav>

        
    );
}

export default Navbar;


