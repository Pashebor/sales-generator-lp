import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openCase} from '../actions/index';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';


class FullCase extends Component{
    isShow(){
        if(this.props.formState.fullCase) {
            return {
                display: 'block',
                animation: 'popupAnimOpen 0.4s 1 linear'
            };
        } else {
            return {
                animation: 'popupAnimClose 0.4s 1 linear',
                display: 'none'
            };
        }
    }

    isUri() {
        if (this.props.formState.caseUri) {
            for (let i = 0; i < this.props.formState.caseUri.length; i++) {
                return this.props.formState.caseUri[i];
            }
        }
    }

    closeFullcaseHandler() {
        this.props.openCase('', false);
    }
    render() {
        return(
            <section className="popup-overlay" style={this.isShow()} onClick={this.closeFullcaseHandler.bind(this)}>
                <div className="popup-fullcase">
                    <div className="popup-fullcase__close" onClick={this.closeFullcaseHandler.bind(this)}>&times;</div>
                    <img src={this.isUri()}/>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({openCase}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FullCase);