import './App.css';
import Header from './Components/Header';
import { Fetcher } from './Helpers/Fetcher';

function App() {
  return (
    <div className="App">
      <Header />
      <Fetcher />
    </div>
  );
}

export default App;
