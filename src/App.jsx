import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import LargusPage from "./components/largusPage/LargusPage";
import NailsPage from "./components/nailsPage/NailsPage";
import Konstuct from "./components/konstuctPage/KonstuctPage";
import WeatherPage from "./components/weatherPage/WeatherPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/largus">
            <LargusPage />
          </Route>
          <Route path="/nails">
            <NailsPage />
          </Route>
          <Route path="/kontuct">
            <Konstuct />
          </Route>
          <Route path="/weather">
            <WeatherPage />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
