import HardSkills from "../aboutHardSkills/HardSkills";
import SoftSkills from "../aboutSoftSkills/SoftSkills";
import "../homePage/homepage.scss";
import Intro from "../intro/Intro";
import MyWorks from "../myWorks/MyWorks";
import SkillsWheel from "../skillsWheel/SkillsWheel";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Intro></Intro>
      <HardSkills></HardSkills>
      <SkillsWheel></SkillsWheel>
      <SoftSkills></SoftSkills>
      <MyWorks></MyWorks>
    </div>
  );
}
