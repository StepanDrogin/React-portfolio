import "../largusPage/larguspage.scss";
import HTML from "../../assets/svg/html-icon.svg";
import CSS from "../../assets/svg/css-icon.svg";
import Vue from "../../assets/svg/vue-icon.svg";
import LargusFrontImage from "../../assets/img/largus-front.png";
import LargusBackImage from "../../assets/img/largus-back.png";
import Konstuct from "../../assets/img/konstukt-small.png";
import Nails from "../../assets/img/nails-small.png";
import Weather from "../../assets/img/weather-small.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function LargusPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="container">
      <h3 className="page__h3">Largus Stavropol</h3>
      <div className="pages">
        <div className="page__left">
          <p className="page__p">
            This is a single page application wrotten on Vue.js. In this
            application, I have created data loading from the database through
            an appeal to api, the functionality of adding, deleting and changing
            the quantity of goods. Also i created pop up in cart. You can look
            at source code by clicking on the image and going to the project
            repository in github.
          </p>
          <div className="page__icons">
            <img src={HTML} className="page__icon" alt="html icon"></img>
            <img src={CSS} className="page__icon" alt="css icon"></img>
            <img src={Vue} className="page__icon" alt="vue icon"></img>
          </div>
        </div>
        <div className="page__right">
          {/* eslint-disable-next-line */}
          <a
            href="https://github.com/StepanDrogin/LargusStavropol-eshop"
            target="_blank"
          >
            <img
              src={LargusFrontImage}
              className="page__image-front"
              alt="largus"
            ></img>
            <img
              src={LargusBackImage}
              className="page__image-back"
              alt="largus"
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
          <Link to="/nails">
            <img src={Nails} className="page__card-img" alt="card"></img>
          </Link>
          <p className="card__name">Nails</p>
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
