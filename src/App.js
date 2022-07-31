import Arrows from './components/Arrows';
import GameArea from './components/GameArea';
import Header from './components/Header';
import StyledMain from './style/StyleMain';

function App() {
  return (
    <>
      <StyledMain>
        <section className="main faded">
          <div className="container">
            <Header/>
            <GameArea/>
            <Arrows/>
          </div>
        </section>    
      </StyledMain>
    </>
  )
}

export default App;
