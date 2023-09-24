
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

function App() {
  return (
    <div className="App">
      <div className='first-container'>
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
