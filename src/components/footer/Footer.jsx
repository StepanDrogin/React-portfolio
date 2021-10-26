import "../footer/footer.scss"
import Mail from "../../assets/svg/mail.svg"
import Linkedin from "../../assets/svg/linkedin.svg"
import Skype from "../../assets/svg/skype.svg"
import GitHub from "../../assets/svg/github-icon.svg"

export default function Footer() {
    return (
        <div className="container">
        <div id='footer' className="footer__underline"></div>
        <h4 className="footer__h4">Let's get in touch!</h4>
        <div className="footer__items">
            <div className="footer__item">
                    {/* eslint-disable-next-line */}
                <a href="mailto:drogenko.stepan@yandex.ru" className="footer__item-link">
                    <img src={Mail} className="footer__item-img" alt="icon"></img>
                </a>
            </div>
            <div className="footer__item">
                    {/* eslint-disable-next-line */}
                <a href="https://www.linkedin.com/in/stepan-drogin-b0ab85215/" className="footer__item-link">
                    <img src={Linkedin} className="footer__item-img" alt="icon"></img>
                </a>
            </div>
            <div className="footer__item">
                    {/* eslint-disable-next-line */}
                <a href="skype:[live:.cid.ef67230e60df834d]" className="footer__item-link">
                    <img src={Skype} className="footer__item-img" alt="icon"></img>
                </a>
            </div>
            <div className="footer__item">
                    {/* eslint-disable-next-line */}
                <a href="https://github.com/StepanDrogin" target='_blank' className="footer__item-link">
                    <img src={GitHub} className="footer__item-img" alt="icon"></img>
                </a>
            </div>
        </div>
        </div>
    )
};