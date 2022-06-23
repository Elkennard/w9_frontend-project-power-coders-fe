import "./App.css";
import BrandLogo from "../Header/BrandLogo/brandLogo";
import ProfilePicture from "../Header/ProfilePic/profilePic";
import BurgerMenu from "../Header/Burger Menu/burgerMenu";
import Quotes from "../LowerSection/Quote/quote";
import WellBeing from "../LowerSection/WellBeingButton/wellBeingButton";
import SoundOnOff from "../LowerSection/SoundOnOff/SoundOnOff";
import WelcomeUser from "../TopSection/WelcomeUser/welcomeUser";
import Timer from "../TopSection/TimerTillBreak/TimerTillBreak";
import ControlledCarousel from "../Carousel/WeeksResource/weeksR";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App" id="outer-container">
      <BurgerMenu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <header className="App-header">
        <div id="page-wrap"></div>
        <BrandLogo class="title" logo={BrandLogo} />
        <ProfilePicture className="profile" picture={ProfilePicture} />
      </header>
      <main>
        <section className="TopSection">
          <WelcomeUser user="Sarah"></WelcomeUser>
          <Timer timer="countdown"></Timer>
        </section>

        <div className="column2">
          <ControlledCarousel className="carousel" />
        </div>
      </main>
      <section className="LowerSection">
        <SoundOnOff></SoundOnOff>
        <Quotes></Quotes>
        <WellBeing></WellBeing>
      </section>
    </div>
  );
}

export default App;
