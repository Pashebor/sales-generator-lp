import React, { Component } from 'react';
import {showModal} from '../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class Proposition extends Component{
    
    render() {
        return(
            <section className="proposition">
                <div className="container">
                    <h2 className="proposition__title">Выгодное предложение!</h2>
                    <div className="proposition-block">
                        <div className="proposition-block__item">
                            <p>Только ДО КОНЦА НЕДЕЛИ</p>
                            <p>Стоимость профессионального аудита сайта составит:</p>
                            <p>16 500</p>
                            <p>9 900</p>
                            <p>рублей</p>
                        </div>
                        <div className="proposition-block__item">
                            <p>Успейте получить</p>
                            <p>профессиональный аудит сайта</p>
                            <p>со скидкой <span>40%</span></p>
                            <form className="form-group">
                                <label>Имя</label>
                                <input id="name" name="phone" type="text" className="form-control"/>
                                <label >Телефон</label>
                                <input id="phone" name="phone" type="text" className="form-control"/>
                                <input className="btn" type="button" name="button" value="Воспользоваться предложением!"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="separator-bottom">
                    <div className="gradient-bottom"></div>
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
    return bindActionCreators({showModal}, dispatch);
};

export default connect(mapDispatchToProps, mapStateToProps)(Proposition);