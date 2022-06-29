import "./App.css";
import BrandLogo from "../Header/BrandLogo/brandLogo";
import ProfilePicture from "../Header/ProfilePic/profilePic";
import BurgerMenu from "../Header/Burger Menu/burgerMenu";
import QuotesDisplay from "../LowerSection/QuotesDisplay/quotesDisplay";
import WellBeingButton from "../LowerSection/WellBeingButton/wellBeingButton";
import SoundOnOff from "../LowerSection/SoundOnOff/SoundOnOff";
import WelcomeUser from "../TopSection/WelcomeUser/welcomeUser";
import Timer from "../TopSection/Timer/timer";
import ControlledCarousel from "../Carousel/carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app-container">
      <BurgerMenu />
      <header>
        <div id="page-wrap"></div>
        <BrandLogo />
        <ProfilePicture />
      </header>
      <main>
        <section className="top-section">
          <WelcomeUser />
          <Timer/>
        </section>
        <div className="column2">
          <ControlledCarousel />
        </div>
      </main>
      <section className="lower-section">
        <SoundOnOff />
        <QuotesDisplay />
        <WellBeingButton/>
      </section>
    </div>
  );
}

export default App;
