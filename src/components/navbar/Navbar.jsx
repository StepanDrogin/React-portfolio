import "../navbar/navbar.scss";

export default function Navbar() {
    return (
        <div className="container">
        <div className="navbar">
        <div className="navbar__left">
        <a href="mailto:drogenko.stepan@yandex.ru" className="navbar__mail">drogenko.stepan@yandex.ru</a>
        </div>
        <div className="navbar__right">
        {/* eslint-disable-next-line */}
            <a href="#" className="navbar__right-item">About me</a>
                    {/* eslint-disable-next-line */}
            <a href="#" className="navbar__right-item">Work</a>
                    {/* eslint-disable-next-line */}
            <a href="#" className="navbar__right-item">Contact</a>
        </div>
        </div>
        </div>
    )
};