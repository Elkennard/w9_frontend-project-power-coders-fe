import "./App.css";
import BrandLogo from "../Header/BrandLogo/brandLogo";
import ProfilePicture from "../Header/ProfilePic/profilePic";
import BurgerMenu from "../Header/Burger Menu/burgerMenu";

function App() {
	return (
		<div className="App" id="outer-container">
    <BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
			<header className="App-header">
      <div id="page-wrap">
      </div>
        <BrandLogo logo={BrandLogo}/>
        <ProfilePicture picture={ProfilePicture}/>
      </header>
		</div>
	);
}

export default App;
