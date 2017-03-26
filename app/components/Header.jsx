import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import HeaderContent from './HeaderContent';

class Header extends Component{
    render() {
        return(
            <header className="header">
                <NavBar/>
                <HeaderContent/>
            </header>
        )
    }
}

export default Header;