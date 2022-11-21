import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import Landing from './Components/Landing/Landing';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import Index_main from './Components/Index_main';
import Browse from './Components/Browse/Browse';
import Import from './Components/Import/Import';
import Migrate from './Components/Migrate/Migrate';
import Liquidity from './Components/Liquidity/Liquidity';
import Your_forms from './Components/Your_forms/Your_forms';
import All_forms from './Components/All_forms/All_forms';
import Explore from './Components/Explore/Explore';
import Open_market from './Components/Open_market/Open_market';
import Game_assets from './Components/Game_assets/Game_assets';
import Launchpad from './Components/Launchpad/Launchpad';
import Drawwer from './Components/Drawwer/Drawwer';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header />
      <Drawwer />
      <Routes>
      <Route exact path="/" element={<Index_main />} />
      <Route exact path="/Browse" element={<Browse />} />
      <Route exact path="/Import" element={<Import />} />
      <Route exact path="/Migrate" element={<Migrate />} />
      <Route exact path="/Liquidity" element={<Liquidity />} />
      <Route exact path="/Your_forms" element={<Your_forms />} />
      <Route exact path="/All_forms" element={<All_forms />} />
      <Route exact path="/Explore" element={<Explore />} />
      <Route exact path="/Open_market" element={<Open_market />} />
      <Route exact path="/Game_assets" element={<Game_assets />} />
      <Route exact path="/Launchpad" element={<Launchpad />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
