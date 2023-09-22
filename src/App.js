
import './App.css';
import MainPhoto from './components/firstContainer/MainPhoto';
import MainText from './components/firstContainer/MainText';
import NavBar from './components/firstContainer/NavBar';
import SideBar from './components/secondContainer/SideBar';
import Content from './components/secondContainer/Content';
import BackgroundText from './components/secondContainer/BackgroundText';
import MainHeading from './components/thirdContainer/MainHeading';
import MiddleImage from './components/thirdContainer/MiddleImage';
import AboutContent from './components/thirdContainer/AboutContent';
import SkillsContainer from './components/thirdContainer/SkillsContainer';

function App() {
  return (
    <div className="App">
      <div className='first-container-div'>
        <NavBar />
        <div className='content'>
          <MainText/>
          <MainPhoto/>
        </div>
      </div>

      <div className='second-container'>
        <div className='top-bg-text'>
          <BackgroundText/>
        </div>
        <SideBar/>
        <Content/>
      </div>
      <div className='third-container'>
        <MainHeading/>
        <div className='third-sub-container'>
        <AboutContent/>
        <SkillsContainer/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
