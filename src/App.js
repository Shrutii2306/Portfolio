
import './App.css';
import MainPhoto from './components/firstContainer/MainPhoto';
import MainText from './components/firstContainer/MainText';
import NavBar from './components/firstContainer/NavBar';
import SideBar from './components/secondContainer/SideBar';
import Content from './components/secondContainer/Content';
import BackgroundText from './components/secondContainer/BackgroundText';
import MainHeading from './components/thirdContainer/MainHeading';
import AboutContent from './components/thirdContainer/AboutContent';
import SkillsContainer from './components/thirdContainer/SkillsContainer';
import EmailForm from './components/fourthContainer/EmailForm';
import SideIcons from './components/fourthContainer/SideIcons';
import AvatarImage from './components/fourthContainer/AvatarImage';
import LinkButtons from './components/firstContainer/LinkButtons';
import MiddleHeading from './components/secondContainer/MiddleHeading';
import Temp from './components/secondContainer/Temp';
import miniProjects from './data/miniProjects';
import BackgroundText2 from './components/secondContainer/BackgroundText2';

function App() {
  return (
    <div className="App">
      <div className='first-container'>
        <NavBar />
        <div className='content'>
          <MainText/>
          <LinkButtons/>
          <MainPhoto/>
        </div>
      </div>

      <div className='second-container'>
        <div className='middle-heading'>
          <MiddleHeading/>
        </div>
        <div className='top-bg-text'>
          <BackgroundText/>
        </div>
        <SideBar/>
        <div className='middle-bg-text'>
          <BackgroundText2/>
        </div>
        <div className='bottom-bg-text'>
          <BackgroundText/>
        </div>
        <Content/>
        
      </div>

      <div className='third-container'>
        <MainHeading/>
        <div className='third-sub-container'>
        <AboutContent/>
        <SkillsContainer/>
        </div>        
      </div>

      <div className='fourth-container'>
        <AvatarImage/>
        <EmailForm/>
        
        <div className='side-icon-div'>
          <SideIcons/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
