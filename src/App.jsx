import './App.scss';
import HardSkills from './components/aboutHardSkills/HardSkills';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Intro></Intro>
    <HardSkills></HardSkills>
    </div>
  );
}

export default App;
