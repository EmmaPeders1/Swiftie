import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import AlbumPage from './Pages/AlbumPage';
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
            <Route path=":id" element={<AlbumPage />} />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}
