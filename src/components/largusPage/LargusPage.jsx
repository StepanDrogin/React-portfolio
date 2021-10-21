import '../largusPage/larguspage.scss';
import HTML from '../../assets/svg/html-icon.svg'
import CSS from '../../assets/svg/css-icon.svg'
import Vue from '../../assets/svg/vue-icon.svg'
import LargusFrontImage from '../../assets/img/largus-front.png';
import LargusBackImage from '../../assets/img/largus-back.png';
import Konstuct from "../../assets/img/konstruct.png"
import Nails from "../../assets/img/nails.png"
import Weather from "../../assets/img/weather.png"

export default function LargusPage() {
    return (
        <div className='container'>
        <h3 className='largus__h3'>Largus Stavropol</h3>
        <div className='largus__left'>
            <p className='largus__p'>Long term project to replace ageing internal command-line system with a modern web app using React to consume API data. Client is a US-based retirement fund manager with over $10B in assets.
The Employee Portal is used by employees
of the company to manage customer accounts, transactions, and related information</p>
        <div className='largus__icons'>
            <img src={HTML} className='largus__icon' alt='html icon'></img>
            <img src={CSS} className='largus__icon'alt='css icon'></img>
            <img src={Vue} className='largus__icon'alt='vue icon'></img>
        </div>
        </div>
        <div className='largus__right'>
            <img src={LargusFrontImage} className='page_image' alt='largus'></img>
            <img src={LargusBackImage} className='page_image' alt='largus'></img>
        </div>
        <h2 className='page__h2'>More work</h2>
        <div className='page__cards'>
            <div className='page__card'>
                <img src={Konstuct} className='page__card-img' alt='card'></img>
                <p className='card__name'>Konstuct</p>
            </div>
            <div className='page__card'>
                <img src={Nails} className='page__card-img' alt='card'></img>
                <p className='card__name'>Nails</p>
            </div>
            <div className='page__card'>
                <img src={Weather} className='page__card-img' alt='card'></img>
                <p className='card__name'>Weather</p>
            </div>
        </div>
        </div>
    )
};