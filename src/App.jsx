import './App.scss';
import HardSkills from './components/aboutHardSkills/HardSkills';
import SoftSkills from './components/aboutSoftSkills/SoftSkills';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import MyWorks from './components/myWorks/MyWorks';
import Navbar from './components/navbar/Navbar';
import SkillsWheel from './components/skillsWheel/SkillsWheel';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Intro></Intro>
    <HardSkills></HardSkills>
    <SkillsWheel></SkillsWheel>
    <SoftSkills></SoftSkills>
    <MyWorks></MyWorks>
    <Footer></Footer>
    </div>
  );
}

export default App;
