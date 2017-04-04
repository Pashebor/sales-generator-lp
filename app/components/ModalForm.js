import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showModal} from '../actions/index';
import { bindActionCreators } from 'redux';

class ModalForm extends Component{
    isShow() {
        if (this.props.formState.modalShow) {
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
    closeModalHandler(e) {
        e.stopPropagation();
        this.props.showModal(false);
    }

    formClickHandler(e){
        e.stopPropagation();
        this.props.showModal(true);
    }

    render() {
        return(
            <div className="popup-overlay" style={this.isShow()} onClick={this.closeModalHandler.bind(this)}>
              <div className="popup-form">
                  <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                  <p>Оформление заявки</p>
                  <form action="" className="form-group" onClick={this.formClickHandler.bind(this)}>
                      <label>Во сколько вам позвонить?</label>
                      <input type="text" name="callback" className="form-control"/>
                      <label>Телефон <span>*</span></label>
                      <input type="text" name="" required="true" className="form-control"/>
                      <input type="submit" value='Отправить заявку!' className="btn"/>
                  </form>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
