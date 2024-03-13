import './index.css'
import Navbar from './components/NavBar'
import Intro from "./components/Home";
import CardBox from './components/Card';
import Event from './components/event';
import Know from './components/know';
import ProjectsCard from './components/ProjectsCard';
import Social from './components/Social';
import Separatore from './components/Separatore';


function App() {
    function jumpto(section) {
      
      var targetSection = document.getElementById(section);
      if (targetSection) {
        var targetPosition = targetSection.offsetTop - 120;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
  
  return (
    <>

      <Navbar></Navbar>
      <section class="homesections" id="Home">
        <Intro></Intro>
        <CardBox></CardBox>
        <div class="funnybutton">
          <hr class="sep" />
          <button onClick={() => jumpto('About Me')}>About Me</button>
          <button onClick={() => jumpto('My Projects')}>My Projects</button>
        </div>
      </section>
      <Separatore></Separatore>
      <section id="About Me" class="aboutmesections">
        <div class="contentspace">
          <img class="mainimage" id="aboutmecontent" src="./pro_pick.jpg" />
          <div class="text">
            <hr class="sep" />
            <h1>
              About Me
            </h1>

            <p>Hey, I'm Matteo!,</p>
            <p>
              I'm twenty years old and I'm a computer science student at La Sapienza University in Rome. Ever
              since I was a kid, I knew programming was my thing. I was so sure about it that I chose a high
              school that suited me, ITIS Olivetti in Lecce.
            </p>
            <p>
              So, once I graduated with a score of 93 out of 100, I decided to move to Rome to continue my studies
              and become a master of programming and cybersecurity!
            </p>
            <p>Quite a story, isn't it?</p>
            <div class="underaboutme">
              <div class="timelineright">
                <p>-/ My Time Line /-</p>
                  <Event date="Now" now={"now"} desc="Continuing education in front-end and back-end development"></Event>
                  <Event date="2023" desc="Started Computer Science University La Sapienza (Rome)"></Event>
                  <Event date="2022" desc="Graduated at Superior SchoolsItes Olivetti (Lecce)"></Event>
              </div>
              <div class="timelineleft">
                <p>-/ My Knowledge /-</p>
                <Know icon="./lenguage icons/icons8-html-5.svg" desc="Html"></Know>
                <Know icon="./lenguage icons/icons8-css3.svg" desc="Css"></Know>
                <Know icon="./lenguage icons/icons8-javascript-logo.svg" desc="JavaScript"></Know>
                <Know icon="./lenguage icons/react.png" desc="React"></Know>
                <Know icon="./lenguage icons/nodejs-icon.jpg" desc="Node.js"></Know>
                <Know icon="./lenguage icons/icons8-python.svg" desc="Pyhton"></Know>
                <Know icon="./lenguage icons/icons8-java.svg" desc="Java"></Know>
                <Know icon="./lenguage icons/icons8-.net-framework.svg" desc=".Net FrameWork"></Know>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separatore></Separatore>
      <section class="myprojectsection" id="My Projects">
        <div class="projects">
          <div class="text">

            <h1>
              My Projects
            </h1>
            <hr class="sep"/>
            <p class="centered">
              Several projects entirely created by me are available on Github:
            </p>
            <div class="cardbox">
              <ProjectsCard title="Pomodoro-Timer" projectscodes={["html", "css", "javascript"]} desc="Set the timer for your work session, take a short break, and repeat! Just click 'Start' to begin your focused work session." show="https://matteogeusa-dev.github.io/Pomodoro-Timer-WebApp/" repo="https://github.com/MatteoGeusa-Dev/Pomodoro-Timer-WebApp"></ProjectsCard>
              <ProjectsCard title="Telegram-Popup" projectscodes={["html", "css", "javascript"]} desc="Introducing my Telegram popup Chrome extension. Never miss a beat in your conversations while surfing the web!" repo="https://github.com/MatteoGeusa-Dev/Telegram-Web-Popup-Chrome-Extension/"></ProjectsCard>
            </div>
            <div class="cardbox">
              <ProjectsCard title="Lista-Della-Spesa" projectscodes={["html", "css", "javascript"]} desc="My handy grocery list WebApp on Chrome – your virtual shopping companion! Easily add items as you think of them." show="https://matteogeusa-dev.github.io/Lista-della-spesa-WebApp/" repo="https://github.com/MatteoGeusa-Dev/Lista-della-spesa-WebApp"></ProjectsCard>
              <ProjectsCard title="Autoeditor-Generator" projectscodes={["pyhton"]} desc="I've built a tool with Python that does all the dirty work to generate those complicated commands for auto-editing the library" repo="https://github.com/MatteoGeusa-Dev/autoeditor-generator-command"></ProjectsCard>
            </div>
            <div class="moreprojects">
              <a href="https://github.com/MatteoGeusa-Dev" target="_blank"><button>More Repository</button></a>
            </div>
          </div>
        </div>
      </section>
      <Separatore></Separatore>
      <section class="contactsection" id="My Socials">
        <Social class="soc"></Social>
      </section>



    </>
  )
}

export default App
