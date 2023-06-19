import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import TaylorSwift from './Pages/TaylorSwift';
import Red from './Pages/Red';
import './App.css';

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <Header />
          <Footer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/taylorSwift' element={<TaylorSwift />} />
            <Route path='/red' element={<Red />} />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}
