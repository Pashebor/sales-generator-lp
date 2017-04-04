import React, { Component } from 'react';

const YouSiteAudit = () =>{
        return(
            <section className="audit">
                <div className="container">
                    <h2 className="audit__title">Аудит Вашего сайта поможет</h2>
                    <div className="audit-info">
                        <div className="audit-info__item">
                            <img src="images/schedule.svg" alt="Позиции" title="Поднять позиции"/>
                            <h4>Поднять позиции</h4>
                            <p>в поисовых системах</p>
                        </div>
                        <div className="audit-info__item">
                            <img src="images/clients.svg" alt="Позиции" title="Поднять позиции"/>
                            <h4>Увеличить</h4>
                            <p>число новых клиентов</p>
                        </div>
                        <div className="audit-info__item">
                            <img src="images/lowprice.svg" alt="Позиции" title="Поднять позиции"/>
                            <h4>Уменьшить стоимость</h4>
                            <p>привлечения клиентов</p>
                        </div>
                    </div>
                </div>
            </section>
        );
};

export default YouSiteAudit;