import React from 'react';
import { Component } from 'react';
import SeoBlock from './SeoBlock.js';
import YouSiteAudit from './YouSiteAudit';
import IncludeAudit from './IncludeAudit';

class Main extends Component{
    render() {
        return(
           <main className="main">
               <SeoBlock/>
               <YouSiteAudit/>
               <IncludeAudit/>
           </main>
        )
    };
}

export default Main;

