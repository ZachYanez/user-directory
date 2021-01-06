import React from 'react';
import './style.css'; 



function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                User Chooser
            </a>
            <div className="searchbox d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search by first name" aria-label="Search"id="first" onChange={props.handleChange}/>
            <input className="form-control mr-sm-2" type="search" id="last" placeholder="Search by last name" aria-label="Search" onChange={props.handleChange}/>
            </div>
            <div className="justify-content-end m-2">
            <button type="button" class="btn btn-primary m-2">First</button>
            <button type="button" class="btn btn-primary m-2">Next</button>
            <button type="button" class="btn btn-primary m-2">Last</button>
            <button type="button" class="btn btn-primary m-2">Other</button>
            </div>
        </nav>

        
    );
}

export default Navbar;


