import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showModal, sendCallback} from '../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';

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

    mailNotification() {
        let response = this.props.formState.responseJson;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="popup-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="popup-form__notification popup-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
         return notification(response);
        } else {
            return false;
        }
    }

    btnSubmitHandler(e) {
        e.preventDefault();
        if (!this.props.formState.typeRate) {
            let formData = {'form-name': 'callback'};
            for (let field in this.refs) {
                formData[field] = this.refs[field].mask.getValue();
            }
            this.props.sendCallback(formData);
        } else {
            let formData = {'form-name': 'rates', 'rate': this.props.formState.typeRate};
            for (let field in this.refs) {
                formData[field] = this.refs[field].mask.getValue();
            }
            this.props.sendCallback(formData);
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
                  {this.mailNotification()}
                  <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                      <label>Во сколько Вам позвонить?</label>
                      <MaskedInput  mask="11:11"type="text" ref="callback" name="callback" className="form-control"/>
                      <label>Телефон <span>*</span></label>
                      <MaskedInput  mask="+7(111) 111 11 11" type="text" ref="phone" name="phone" required="true" className="form-control"/>
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
