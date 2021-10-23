import { Link } from "react-router-dom";
import "../navbar/navbar.scss";

export default function Navbar() {
    return (
        <div className="container">
        <div className="navbar">
        <div className="navbar__left">
        <a href="mailto:drogenko.stepan@yandex.ru" className="navbar__mail">drogenko.stepan@yandex.ru</a>
        </div>
        <div className="navbar__right">
                <Link to='/'>
                {/* eslint-disable-next-line */}
        <span href="#" className="navbar__right-item main__page">Main page</span>
        </Link>
        {/* eslint-disable-next-line */}
            <a href="#about" className="navbar__right-item">About me</a>
                    {/* eslint-disable-next-line */}
            <a href="#work" className="navbar__right-item">My works</a>
                    {/* eslint-disable-next-line */}
            <a href="#footer" className="navbar__right-item">Contact</a>
        </div>
        </div>
        </div>
    )
};