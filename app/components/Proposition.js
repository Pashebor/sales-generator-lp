import React, { Component } from 'react';
import {showModal, setTypeRate} from '../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class Proposition extends Component{
    openModalHandler(event) {
        this.props.setTypeRate(event.target.getAttribute('data-rate'));
        this.props.showModal(true);
        switch (event.target.getAttribute('data-rate')) {
            case 'Базовый':
                yaCounter44418460.reachGoal('ORDER_BASE');
                return true;
                break;
            case 'Оптимальный':
                yaCounter44418460.reachGoal('ORDER_OPTIMAL');
                return true;
                break;
            case 'Премиум':
                yaCounter44418460.reachGoal('ORDER_PREMIUM');
                return true;
                break;
        }

    }
    render() {
        return(
            <section className="proposition">
                <div className="container">
                    <h2 className="proposition__title">Сколько стоит SEO-аудит?</h2>
                    <div className="proposition-block">
                        <div className="proposition-block__item">
                          <div className="proposition-block__item-wrapper">
                            <header className="title-block">
                               <div className="title-fade">
                                 <h4 className="title">Базовый</h4>
                               </div>
                            </header>
                            <main className="rate">
                                <div className="rate__text"><img src="images/check.svg"/><p>Анализ источников трафика и их эффективности</p></div>
                                <div className="rate__text"><img src="images/check.svg"/><p>Рекомендации по устранению обнаруженных технических проблем</p></div>
                                <div className="rate__text"><img src="images/check.svg"/><p>Предложения по улучшению юзабилити и повышению конверсии</p></div>
                                <div className="rate__time">Срок выполнения: <span>5</span> дней</div>
                            </main>
                            <footer className="price">
                                <p className="price__text">4 900 р.</p>
                                <button className="btn" data-rate="Базовый" onClick={this.openModalHandler.bind(this)}>Заказать аудит</button>
                            </footer>
                          </div>
                        </div>
                        <div className="proposition-block__item">
                          <div className="proposition-block__item-wrapper">
                            <header className="title-block">
                                <div className="title-fade">
                                    <h4 className="title">Оптимальный</h4>
                                </div>
                            </header>
                            <main className="rate">
                                <div className="rate__plus">
                                    <p>Базовый <br/> <span>+</span></p>
                                </div>
                                <div className="rate__text"><img src="images/check.svg"/><p>Анализ внешней и внутренней оптимизации сайта</p></div>
                                <div className="rate__text"><img src="images/check.svg"/><p>Анализ мета-тегов и семантического ядра сайта</p></div>
                                <div className="rate__text"><img src="images/check.svg"/><p>Подробные рекомендации по увеличению продаж с Вашего сайта</p></div>
                                <div className="rate__time">Срок выполнения: <span>72</span> часа</div>
                                <div className="rate__text rate__text--plus"><p>30-минутная консультация веб-аналитика после аудита</p></div>
                            </main>
                            <footer className="price">
                                <div className="price__discount">
                                    <h5 className="price__discount-header">Только до конца недели!</h5>
                                    <p className="price__discount-oldprice">19 990 р.</p>
                                </div>
                                <p className="price__text">9 900 р.</p>
                                <button className="btn" data-rate="Оптимальный" onClick={this.openModalHandler.bind(this)}>Заказать аудит со скидкой</button>
                            </footer>
                          </div>
                        </div>
                        <div className="proposition-block__item">
                          <div className="proposition-block__item-wrapper">
                            <header className="title-block">
                                <div className="title-fade">
                                    <h4 className="title">Премиум</h4>
                                </div>
                            </header>
                            <main className="rate">
                                <div className="rate__plus">
                                    <p>Оптимальный <br/> <span>+</span></p>
                                </div>
                                <div className="rate__text"><img src="images/check.svg"/><p>Выявление ошибок, мешающих выводу сайта в ТОП поисковых систем</p></div>
                                <div className="rate__text"><img src="images/check.svg"/><p>Глубокий анализ потенциала Вашего сайта для дальнейшего продвижения</p></div>
                                <div className="rate__text"><img src="images/check.svg"/><p>Полное и четкое понимание того, в каком состоянии находится Ваш сайт сейчас</p></div>
                                <div className="rate__text"><img src="images/check.svg"/><p>Список действий, которые дадут максимальный эффект в кратчайшие сроки</p></div>
                                <div className="rate__time">Срок выполнения: <span>24</span> часа</div>
                                <div className="rate__text rate__text--plus"><p>30-минутная консультация веб-аналитика после аудита</p></div>
                            </main>
                            <footer className="price">
                                <p className="price__text">29 900 р.</p>
                                <button className="btn" data-rate="Премиум" onClick={this.openModalHandler.bind(this)}>Заказать аудит</button>
                            </footer>
                          </div>
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
    return bindActionCreators({showModal, setTypeRate}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Proposition);