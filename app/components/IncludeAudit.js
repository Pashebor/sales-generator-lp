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
                       <div></div>
                   </div>
               </div>
             </div>    
         </section>
    );
};

export default IncludeAudit;