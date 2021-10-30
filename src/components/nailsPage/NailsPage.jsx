import "../nailsPage/nailspage.scss";
import HTML from "../../assets/svg/html-icon.svg";
import CSS from "../../assets/svg/css-icon.svg";
import SASS from "../../assets/svg/sass.svg";
import NailsFrontImage from "../../assets/img/nails-front.png";
import NailsBackImage from "../../assets/img/nails-back.png";
import Konstuct from "../../assets/img/konstukt-small.png";
import Largus from "../../assets/img/largus-small.png";
import Weather from "../../assets/img/weather-small.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NailsPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="container">
      <h3 className="page__h3">Nails</h3>
      <div className="pages">
        <div className="page__left">
          <p className="page__p">
            This landing page i created on HTML and SCSS. On this page i created
            animations and feedback form. You can look at source code by
            clicking on the image and going to the project repository in github
          </p>
          <div className="page__icons">
            <img src={HTML} className="page__icon" alt="html icon"></img>
            <img src={CSS} className="page__icon" alt="css icon"></img>
            <img src={SASS} className="page__icon" alt="vue icon"></img>
          </div>
        </div>
        <div className="page__right">
          {/* eslint-disable-next-line */}
          <a href="https://github.com/StepanDrogin/Nails" target="_blank">
            <img
              src={NailsFrontImage}
              className="page__image-front"
              alt="Nails"
            ></img>
            <img
              src={NailsBackImage}
              className="page__image-back"
              alt="Nails"
            ></img>
          </a>
        </div>
      </div>
      <h2 className="page__h2">More work</h2>
      <div className="page__cards">
        <div className="page__card">
          <Link to="/kontuct">
            <img src={Konstuct} className="page__card-img" alt="card"></img>
          </Link>
          <p className="card__name">Konstuct</p>
        </div>
        <div className="page__card">
          <Link to="/largus">
            <img src={Largus} className="page__card-img" alt="card"></img>
          </Link>
          <p className="card__name">Largus</p>
        </div>
        <div className="page__card">
          <Link to="/weather">
            <img src={Weather} className="page__card-img" alt="card"></img>
          </Link>
          <p className="card__name">Weather</p>
        </div>
      </div>
    </div>
  );
}
