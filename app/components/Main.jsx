import React from 'react';
import { Component } from 'react';
import SeoBlock from './SeoBlock.js';
import YouSiteAudit from './YouSiteAudit';

class Main extends Component{
    render() {
        return(
           <main className="main">
               <SeoBlock/>
               <YouSiteAudit/>
           </main>
        )
    };
}

export default Main;

