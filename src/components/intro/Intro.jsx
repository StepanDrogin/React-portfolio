import "../intro/intro.scss";
import notebook from "../../assets/img/notebook.png";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Javascript", "React", "Vue"],
    });
  }, []);
  return (
    <div className="container">
      <div className="intro">
        <div className="intro__left">
          <h3 className="intro__h2">Hi, my name is Stepan</h3>
          <h1 className="intro__h1">
            I am a <span className="intro__h1-thick"> frontend developer </span>{" "}
            from Russia working in
            <p className="itype" ref={textRef}></p>
          </h1>
          <p className="intro__p">
            Are you looking for a communications front-end developer who works
            alone and in a team and above all, passionate about everything
            JavaScript (including Vue or React)?
          </p>
          <div className="middle">
            {/* eslint-disable-next-line */}
            <a href="mailto:drogenko.stepan@yandex.ru" className="btn btn3">
              Contact me &#8594;
            </a>
          </div>
        </div>
        <div className="intro__right">
          <img
            className="intro__right--image"
            src={notebook}
            alt={"notebook"}
          ></img>
        </div>
      </div>
    </div>
  );
}
