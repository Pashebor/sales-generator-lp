import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HeaderContent extends Component{
    render() {
        return(
            <section className="header-content-background">
                <div className="content--background">
                    <div className="container header__content">
                        <h2 className="header__content-title">Профессиональный аудит сайта за <span>72 часа</span></h2>
                        <p className="header__content-text">Позволит увеличить число клиентов в несколько раз</p>
                        <p className="header__content-text">с помощью наших рекомендаций по 47 критериям</p>
                        <h5 className="know-form__title">Узнайте, сколько новых клиентов Вы можете получить с сайта!</h5>
                        <form className="form-group know-form">
                            <input type="text" className="form-control" placeholder="Телефон *"/>
                            <input type="button" className="btn"  value="Узнать!"/>
                        </form>
                    </div>
                    <div className="separatorbottom">
                        <div className="bigcircle-bottom">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeaderContent;