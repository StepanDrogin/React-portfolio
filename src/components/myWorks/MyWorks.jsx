import "../myWorks/myworks.scss"
import Konstuct from "../../assets/img/konstruct.png"
import Largus from "../../assets/img/largus.png"
import Nails from "../../assets/img/nails.png"
import Weather from "../../assets/img/weather.png"
import { Link } from "react-router-dom"

export default function MyWorks() {
    return (
        <div className="container">
            <p id='work' className="works__p">The work i do.</p>
            <h2 className="works__h2">My Works</h2>
            <div className="works__grid">
                <div className="works__item-1">
                        <Link to="/largus">
                    <img src={Largus} className="works__item-image" alt="Largus"></img>
                        </Link>
                </div>
                <div className="works__item-2">
                <Link to="/nails">
                    <img src={Nails} className="works__item-image" alt="Nails"></img>
                    </Link>
                </div>
                <div className="works__item-3">
                <Link to="/kontuct">
                    <img src={Konstuct} className="works__item-image" alt="Konstuct"></img>
                    </Link>
                </div>
                <div className="works__item-4">
                <Link to="/weather">
                    <img src={Weather} className="works__item-image" alt="Weather"></img>
                    </Link>
                </div>
                <div className="works__item-5">
                    <p className="works__p">I also have other projects in my github profile. You can view them by clicking the link below.</p>
                    <div className="works__flex">
                    <p className="works__p">I create successful &#8594;</p>
                    {/* eslint-disable-next-line */}
                    <a href="https://github.com/StepanDrogin" target='_blank' className="works__link">View More</a>
                    </div>
                </div>
            </div>
        </div>
    )
};