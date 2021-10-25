import '../weatherPage/weatherpage.scss';
import HTML from '../../assets/svg/html-icon.svg'
import CSS from '../../assets/svg/css-icon.svg'
import React from '../../assets/svg/react-icon.svg'
import WeatherImage from '../../assets/img/weather.png';
import Konstuct from "../../assets/img/konstukt-small.png"
import Nails from "../../assets/img/nails-small.png"
import Largus from "../../assets/img/largus-small.png"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function WeatherPage() {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return (
        <div className='container'>
        <h3 className='page__h3'>Weather</h3>
        <div className='pages'>
        <div className='page__left'>
            <p className='page__p'>This weather app i wrote on react.js. This app take API from Open weather API and show you forecast based on your location.  You can look at source code by clicking on the image and going to the project repository in github.</p>
        <div className='page__icons'>
            <img src={HTML} className='page__icon' alt='html icon'></img>
            <img src={CSS} className='page__icon' alt='css icon'></img>
            <img src={React} className='page__icon' alt='vue icon'></img>
        </div>
        </div>
        <div className='page__right'>
                            {/* eslint-disable-next-line */}
                            <a href='https://github.com/StepanDrogin/weather-app' target='_blank'>
            <img src={WeatherImage} className='weather__image' alt='weather'></img>
            </a>
        </div>
        </div>
        <h2 className='page__h2'>More work</h2>
        <div className='page__cards'>
            <div className='page__card'>
            <Link to="/kontuct">
                <img src={Konstuct} className='page__card-img' alt='card'></img>
                </Link>
                <p className='card__name'>Konstuct</p>
            </div>
            <div className='page__card'>
            <Link to='/nails'>
                <img src={Nails} className='page__card-img' alt='card'></img>
                </Link>
                <p className='card__name'>Nails</p>
            </div>
            <div className='page__card'>
            <Link to='/largus'>
                <img src={Largus} className='page__card-img' alt='card'></img>
                </Link>
                <p className='card__name'>Largus</p>
            </div>
        </div>
        </div>
    )
};