import React, { Component } from 'react';


const SeoBlock = () => {
    return (
        <section className="container seo">
           <h2 className="seo__title">Подходит ли SEO-аудит ВАМ?</h2>
           <div className="seo__partitions">
             <div className="seo__partition--1">
                 <h3 className="seo__partitions__header">Аудит сайта <span className="useful useful--not">Не нужен</span> Вам, если:</h3>
                 <p className="seo__partitions-items">Вы - программист, системный администратор, верстальщик, тестировщик;</p>
                 <p className="seo__partitions-items">Вы хотите проверить валидность HTML-кода;</p>
                 <p className="seo__partitions-items">Вы хотите узнать какие нагрузки способен выдержать Ваш сайт;</p>
                 <p className="seo__partitions-items">Вы хотите узнать слабые места Вашей CMS;</p>
                 <p className="seo__partitions-items">Вы хотите выявить ошибки, допущенные разработчиком сайта.</p>
             </div>
             <div className="seo__partition--2">
                 <h3 className="seo__partitions__header">Аудит сайта <span className="useful useful--yes">нужен</span> Вам, если:</h3>
                 <p className="seo__partitions-items">Вы - владелец бизнеса, руководитель компании, коммерческий директор маркетолог;</p>
                 <p className="seo__partitions-items">Вы хотите узнать, как повысить конверсию сайта;</p>
                 <p className="seo__partitions-items">Вы хотите узнать, как обеспечить своему сайту высокие позиции в поисковиках;</p>
                 <p className="seo__partitions-items">Вы хотите проверить текущего подрядчика;</p>
                 <p className="seo__partitions-items">Вы хотите увеличить количество целевых обращений с сайта.</p>
             </div>
           </div>
        </section>
    )
};

export default SeoBlock;