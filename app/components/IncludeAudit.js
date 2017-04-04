import React, { Component } from 'react';
import {showModal} from '../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


class IncludeAudit extends Component{
    showModalHandler(){
        this.props.showModal(true);
    }
    render() {
    return(
         <section className="include">
             <div className="include-wrapper">
               <div className="separatortop">
                     <svg id="triangle" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 0 V 100 H 0 L 50 0 L 100 100 H 100 V 0 Z" ></path></svg>
               </div>
               <div className="container">
                   <h2 className="include__title">Что включает в себя аудит:</h2>
                   <div className="include-materials">
                       <div className="include-materials__list">
                         <p className="list-item"><img src="images/grow-icon.svg"/>Потенциал роста сайта</p>
                         <p className="list-item"><img src="images/cart-icon.svg"/>Анализ продающих свойств сайта</p>
                         <p className="list-item"><img src="images/analyze-icon.svg"/>Анализ качества внутренней и внешней оптимизации</p>
                         <p className="list-item"><img src="images/aim-icon.svg"/>Анализ поведенческих факторов</p>
                         <p className="list-item"><img src="images/client-icon.svg"/>Способы привлечения новых клиентов</p>
                         <p className="list-item"><img src="images/atom-icon.svg"/>Анализ семантического ядра</p>
                         <p className="list-item"><img src="images/profile-icon.svg"/>Контент-анализ</p>
                       </div>
                       <div className="include-materials__desc">
                           <div>
                               <img src="images/sheets.png" alt="Примеры работ" title="Примеры работ"/>
                           </div>
                           <button className="btn" onClick={this.showModalHandler.bind(this)}>Узнайте, сколько клиентов может принести Ваш сайт!</button>
                       </div>
                   </div>
               </div>
             </div>
         </section>
    );
    }
};

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IncludeAudit);
