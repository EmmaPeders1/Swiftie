import './App.css';
import Countdown from './Components/CountDown/CountDown';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Fetcher } from './Helpers/AlbumFetcher';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Time left until the release of
        <br></br>
        <i>Speak Now (Taylor's Version)</i>:
      </h1>
      <Countdown />
      <Fetcher />
      <Footer />
    </div>
  );
}

export default App;
