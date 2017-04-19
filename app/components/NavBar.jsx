import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {showModal} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';


class NavBar extends Component{
    openModalHandler() {
        this.props.showModal(true);
    }
    render() {
        return(
          <nav className="container nav">
              <div className="nav__logo"><img src="images/saleslogowhite.svg"  alt="Sales Generator logo"/></div>
              <h2 className="nav__title">Агентство интернет-маркетинга</h2>
              <a className="nav__tel" href="tel:8 (800) 775 43 06">8 (800) 775 43 06</a>
              <button className="btn btn--callback" onClick={this.openModalHandler.bind(this)}>Обратный звонок</button>
          </nav>
        );
    };
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal}, dispatch);
};

export default  connect(mapStateToProps, mapDispatchToProps)(NavBar);