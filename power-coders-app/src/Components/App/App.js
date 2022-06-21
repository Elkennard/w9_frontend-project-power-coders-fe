import './App.css';
import Quotes from '../LowerSection/Quote/quote';
import WellBeing from '../LowerSection/WellBeingButton/wellBeingButton';
import SoundOnOff from '../LowerSection/SoundOnOff/SoundOnOff';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <main>

        <section className='LowerSection'>
          <SoundOnOff></SoundOnOff>
          <Quotes  author="Abdullatif" quotes="Growth is internal, changes aren't noticed till too late."></Quotes>
          <WellBeing></WellBeing>
        </section>
        
      </main>
    </div>
  );
}

export default App;
