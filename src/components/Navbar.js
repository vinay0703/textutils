import React, { useState } from 'react'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    //state for highlighting links
    const [highlightSelected, setHighlightSelected] = useState("Home");

    //function for changing highlighting links
    let toggleHiglightSelection = (flag)=>{
        let home = document.getElementById('home');
        let title = document.getElementById('title');
        //If we click on existing link then do no change
        if((flag === 0 && highlightSelected === "Home") || (flag === 1 && highlightSelected === "Title")){
            return;
        }

        //Removing the active class from both the links
        home.classList.remove('active');
        title.classList.remove('active');
        
        // If current tab is Home and we click on About, then highlight About
        if(highlightSelected === "Home"){
            setHighlightSelected("Title");
            title.classList.add("active");
        }
        else{
            setHighlightSelected("Home");
            home.classList.add("active");
        }
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={()=>toggleHiglightSelection(0)}><i className="far fa-edit"></i> {props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" id = "home" onClick={()=>toggleHiglightSelection(0)}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about" id = "title" onClick={()=>toggleHiglightSelection(1)}>{props.aboutText}</Link>
                    </li>
                </ul>
                {/* Search box */}
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode === 'light'?'black':'white'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: Proptypes.string,
    aboutText: Proptypes.string 
};

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
};