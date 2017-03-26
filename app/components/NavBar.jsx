import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component{
    render() {
        return(
          <nav className="container nav">
              <div className="nav__logo"><img src="images/saleslogowhite.svg"  alt="Sales Generator logo"/></div>
              <h2 className="nav__title">Агенство интернет-маркетинга</h2>
              <a className="nav__tel" href="tel:8(800)7754306">8 (800) 775 43 06</a>
              <button className="btn btn--callback">Обратный звонок</button>
          </nav>
        );
    };
}

export default  NavBar;