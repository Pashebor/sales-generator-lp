import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ModalForm from './ModalForm';


const App = () => {
    return(
        <div>
            <ModalForm/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
};

export default App;