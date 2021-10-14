import './App.scss';
import HardSkills from './components/aboutHardSkills/HardSkills';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import SkillsWheel from './components/skillsWheel/SkillsWheel';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Intro></Intro>
    <HardSkills></HardSkills>
    <SkillsWheel></SkillsWheel>
    </div>
  );
}

export default App;
