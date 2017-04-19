import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ModalForm from './ModalForm';
import FullCase from './FullCase';
import SliderPopup from './SliderPopup';


const App = () => {
    return(
        <div>
            <SliderPopup/>
            <FullCase/>
            <ModalForm/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
};

export default App;