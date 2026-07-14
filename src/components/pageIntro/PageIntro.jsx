import { useEffect, useState } from "react";
import "./pageIntro.css";

export default function PageIntro() {
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const reduceMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

    if (reduceMotion) {
      setPhase("hidden");
      return undefined;
    }

    const leaveTimer = window.setTimeout(() => setPhase("leaving"), 280);
    const hideTimer = window.setTimeout(() => setPhase("hidden"), 800);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`page-intro page-intro--${phase}`}
    >
      <div className="page-intro__inner">
        <span className="ui-span page-intro__counter">00 / 01</span>
        <span className="ui-span page-intro__role">
          Fullstack / Product Engineer
        </span>
      </div>
      <div className="page-intro__track">
        <span className="ui-span page-intro__progress" />
      </div>
    </div>
  );
}
