import React, { Component } from 'react';


const SeoBlock = () => {
    return (
        <section className="seo">
         <div className="zigzag-bottom">
         <div className="container">
           <h2 className="seo__title">Подходит ли SEO-аудит ВАМ?</h2>
           <div className="seo__partitions">
             <div className="seo__partition--1">
                 <h3 className="seo__partitions__header">Аудит сайта <span className="useful useful--not">Не нужен</span> Вам, если:</h3>
                 <p className="seo__partitions-items"><img src="images/gears.png" alt="IT сотрудник"/>Вы - программист, системный администратор, верстальщик, тестировщик;</p>
                 <p className="seo__partitions-items"><img src="images/html-validator.png" alt="Валидность HTML-кода"/>Вы хотите проверить валидность HTML-кода;</p>
                 <p className="seo__partitions-items"><img src="images/rocket.png" alt="Проверка нагруженности сайта"/>Вы хотите узнать какие нагрузки способен выдержать Ваш сайт;</p>
                 <p className="seo__partitions-items"><img src="images/cms-ability.png" alt="Слабые места CMS"/>Вы хотите узнать слабые места Вашей CMS;</p>
                 <p className="seo__partitions-items"><img src="images/cam.png" alt="Выявить ошибки"/>Вы хотите выявить ошибки, допущенные разработчиком сайта.</p>
             </div>
             <div className="seo__partition--2">
                 <h3 className="seo__partitions__header">Аудит сайта <span className="useful useful--yes">нужен</span> Вам, если:</h3>
                 <p className="seo__partitions-items"><img src="images/id.png" alt="Владелец бизнеса"/>Вы - владелец бизнеса, руководитель компании, коммерческий директор маркетолог;</p>
                 <p className="seo__partitions-items"><img src="images/grow.png" alt="Повысить конверсию"/>Вы хотите узнать, как повысить конверсию сайта;</p>
                 <p className="seo__partitions-items"><img src="images/firstplace.png" alt="Высокие позиции"/>Вы хотите узнать, как обеспечить своему сайту высокие позиции в поисковиках;</p>
                 <p className="seo__partitions-items"><img src="images/tools.png" alt="Проверить подрядчика"/>Вы хотите проверить текущего подрядчика;</p>
                 <p className="seo__partitions-items"><img src="images/aim.png" alt="Увеличить количество целевых обращений"/>Вы хотите увеличить количество целевых обращений с сайта.</p>
             </div>
           </div>
        </div>
         </div>
        </section>
    )
};

export default SeoBlock;