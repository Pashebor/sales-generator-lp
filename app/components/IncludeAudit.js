import React, { Component } from 'react';

const IncludeAudit = () => {
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
                         <p className="list-item"><img src="images/grow-icon.svg"/>Анализ продающих свойств сайта</p>
                         <p className="list-item"><img src="images/grow-icon.svg"/>Анализ качества внутренней и внешней оптимизации</p>
                         <p className="list-item"><img src="images/grow-icon.svg"/>Анализ поведенческих факторов</p>
                         <p className="list-item"><img src="images/grow-icon.svg"/>Способы привлечения новых клиентов</p>
                         <p className="list-item"><img src="images/grow-icon.svg"/>Анализ семантического ядра</p>
                         <p className="list-item"><img src="images/grow-icon.svg"/>Контент-анализ</p>
                       </div>
                       <div className="include-materials__desc">hello</div>
                   </div>
               </div>
             </div>
         </section>
    );
};

export default IncludeAudit;
