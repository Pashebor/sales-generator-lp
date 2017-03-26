import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';

class Header extends Component{
    render() {
        return(
            <header className="header">
                <NavBar/>
               <section className="content header--background">

               </section>
            </header>
        )
    }
}

export default Header;