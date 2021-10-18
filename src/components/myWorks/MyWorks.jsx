import "../myWorks/myworks.scss"
import Konstruct from "../../assets/img/konstruct.png"
import Largus from "../../assets/img/largus.png"
import Nails from "../../assets/img/nails.png"
import Weather from "../../assets/img/weather.png"

export default function MyWorks() {
    return (
        <div className="container">
            <p className="works__p">The work i do.</p>
            <h2 className="works__h2">My Works</h2>
            <div className="works__grid">
                <div className="works__item-1">
                    <img src={Largus} className="works__item-image" alt="Largus"></img>
                </div>
                <div className="works__item-2">
                    <img src={Nails} className="works__item-image" alt="Nails"></img>
                </div>
                <div className="works__item-3">
                    <img src={Konstruct} className="works__item-image" alt="Konstruct"></img>
                </div>
                <div className="works__item-4">
                    <img src={Weather} className="works__item-image" alt="Weather"></img>
                </div>
                <div className="works__item-5">
                    <p className="works__p">I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
I create successful responsive websites that are fast, easy to use, and built with best practices.</p>
                    <p className="works__p">I create successful </p>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="works__link">View More</a>
                </div>
            </div>
        </div>
    )
};