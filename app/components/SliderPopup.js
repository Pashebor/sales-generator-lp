import React, { Component } from 'react';
import {openSlider} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import Slider from 'react-slick';

class SliderPopup extends Component {
    isOpen() {
        if (this.props.formState.slider) {
            return {
                display: 'block',
                animation: 'popupAnimOpen 0.4s 1 linear'
            };
        } else {
            return {
                animation: 'popupAnimClose 0.4s 1 linear',
                display: 'none'
            };
        }
    }

    closeSliderHandler(e) {
        e.stopPropagation();
        this.props.openSlider(false);
    }

    sliderClickHandler(e){
        e.stopPropagation();
        this.props.openSlider(true);
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dragging: false
        };
        return(
            <section className="popup-slider-overlay" style={this.isOpen()} >
                <div className="popup-slider">
                    <div className="popup-slider__close" onClick={this.closeSliderHandler.bind(this)}>&times;</div>
                    <Slider {...settings} >
                        <div><img src="images/1.jpg"/></div>
                        <div><img src="images/2.jpg"/></div>
                        <div><img src="images/3.jpg"/></div>
                        <div><img src="images/4.jpg"/></div>
                    </Slider>
                </div>
            </section>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({openSlider}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderPopup);