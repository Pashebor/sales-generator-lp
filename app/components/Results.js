import React, { Component } from 'react';

const Result = () => {
    return(
      <section className="results">
         <div className="zigzag-bottom">
          <div className="container">
              <h2 className="results__title">Результаты сайтов после внедрения наших рекомендаций</h2>
              <p className="results__subtitle">Более <span>1500 сайтов</span> улучшили свои показатели благодаря нашему аудиту</p>
              <div className="results-info">
                  <div className="results-info__item"><img src="images/pansionat.jpg" alt="График роста сайта Пансионат Осень" title="График роста сайта Пансионат Осень"/></div>
                  <div className="results-info__item"><img src="images/icc.jpg" alt="График роста сайта Междунаротной торговой палаты" title="График роста сайта Междунаротной торговой палаты"/></div>
                  <div className="results-info__item"><img src="images/dejure.jpg" alt="График роста сайта De Jure De Facto" title="График роста сайта De Jure De Facto"/></div>
                  <div className="results-info__item"><img src="images/gd.jpg" alt="График роста сайта Генеральный дирекктор" title="График роста сайта Генеральный дирекктор"/></div>
                  <div className="results-info__item"><img src="images/pansionat.jpg" alt="График роста сайта Пансионат Осень" title="График роста сайта Пансионат Осень"/></div>
                  <div className="results-info__item"><img src="images/icc.jpg" alt="График роста сайта Междунаротной торговой палаты" title="График роста сайта Междунаротной торговой палаты"/></div>
              </div>
          </div>
         </div>
      </section>
    );
};

export default Result;