import HardSkills from '../aboutHardSkills/HardSkills';
import SoftSkills from '../aboutSoftSkills/SoftSkills';
import '../homePage/homepage.scss';
import Intro from '../intro/Intro';
import MyWorks from '../myWorks/MyWorks';
import SkillsWheel from '../skillsWheel/SkillsWheel';

export default function HomePage() {
    return(
        <div>
            <Intro></Intro>
            <HardSkills></HardSkills>
            <SkillsWheel></SkillsWheel>
            <SoftSkills></SoftSkills>
            <MyWorks></MyWorks>
        </div>
    )
};