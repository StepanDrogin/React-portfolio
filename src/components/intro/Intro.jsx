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
      backSpeed:60,
      strings: ["Javascript", "React", "Vue"],
    });
  }, []);
    return (
        <div className="container">
        <div className="intro">
            <div className="intro__left">
                <h3 className="intro__h2">Hi, my name is Stepan</h3>
                <h1 className="intro__h1">I am a frontend developer from Russia working in 
                <p className="itype" ref={textRef}></p>
                </h1>
                <p className="intro__p">Are you looking for a communications front-end developer who works alone and in a team and above all, passionate about everything JavaScript (including React)? Let me know! I also have experience in design.</p>
                <p className="intro__p">Now I cannot complete a new task. Want to be the first to know when I'm available again?</p>
                {/* eslint-disable-next-line */}
                <a href="#" className="intro__link">Contact me &#8594;</a>
            </div>
            <div className="intro__right">
                <img className="intro__right--image" src={notebook} alt={"notebook"}></img>
            </div>
            </div>
        </div>
    )
};