import React from 'react';
import './style.css'; 



function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                User Chooser
            </a>
            <div className="searchbox d-flex">
            <input className="form-control mr-sm-3" type="search" id="last" placeholder="First or Last" aria-label="Search" onChange={props.handleChange}/>
            </div>
            <div className="float-right" >
            <button type="button" className="btn btn-primary m-2" onClick={props.firstNameAsc}>First Des</button>
            <button type="button" className="btn btn-primary m-2" onClick={props.lastNameDesc}>Last Des</button>
            </div>
        
        </nav>

        
    );
}

export default Navbar;


