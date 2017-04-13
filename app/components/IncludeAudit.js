import React, { Component } from 'react';
import {showModal, openSlider} from '../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


class IncludeAudit extends Component{
    showModalHandler(){
        this.props.showModal(true);
    }
    showSliderHandler() {
        this.props.openSlider(true);
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
                         <p className="list-item"><img src="images/grow.svg"/>Рекомендации по увеличению посещаемости и продаж с Вашего сайта</p>
                         <p className="list-item"><img src="images/questions.svg"/>Полное и четкое понимание всех плюсов и минусов вашего сайта</p>
                         <p className="list-item"><img src="images/search.svg"/>Анализ ошибок внутренней и внешней оптимизации сайта</p>
                         <p className="list-item"><img src="images/gauge.svg"/>Оценка потенциала Вашего сайта для дальнейшего продвижения</p>
                         <p className="list-item"><img src="images/list.svg"/>Список действий, которые дадут максимальный эффект в краткосрочном периоде</p>
                       </div>
                       <div className="include-materials__desc">
                           <div>
                               <img src="images/pages-audit.png" alt="Примеры работ" title="Примеры работ" onClick={this.showSliderHandler.bind(this)}/>
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
    return bindActionCreators({showModal, openSlider}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IncludeAudit);
