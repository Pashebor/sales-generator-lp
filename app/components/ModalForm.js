import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showModal, sendCallback} from '../actions/index';
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

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {};
        for (let field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        this.props.sendCallback(formData);
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
                  <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                      <label>Во сколько Вам позвонить?</label>
                      <input type="text" ref="callback" name="callback" className="form-control"/>
                      <label>Телефон <span>*</span></label>
                      <input type="text" ref="phone" name="phone" required="true" className="form-control"/>
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
    return bindActionCreators({showModal, sendCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
