import { Route } from "react-router-dom";
import "./App.css";
import CrewAnousheh from "./pages/CrewAnousheh";
import CrewDouglas from "./pages/CrewDouglas";
import CrewMark from "./pages/CrewMark";
import CrewVictor from "./pages/CrewVictor";
import DestEuropa from "./pages/DestEuropa";
import DestMars from "./pages/DestMars";
import DestMoon from "./pages/DestMoon";
import DestTitan from "./pages/DestTitan";
import Home from "./pages/Home.jsx";
import RocketTech from "./pages/RocketTech";
import SpaceCapsuleTech from "./pages/SpaceCapsuleTech";
import SpaceportTech from "./pages/SpaceportTech";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/destination/moon" component={DestMoon} />
      <Route exact path="/destination/mars" component={DestMars} />
      <Route exact path="/destination/europa" component={DestEuropa} />
      <Route exact path="/destination/titan" component={DestTitan} />
      <Route exact path="/crew/douglas" component={CrewDouglas} />
      <Route exact path="/crew/mark" component={CrewMark} />
      <Route exact path="/crew/victor" component={CrewVictor} />
      <Route exact path="/crew/anousheh" component={CrewAnousheh} />
      <Route exact path="/rockettech/" component={RocketTech} />
      <Route exact path="/spaceport/" component={SpaceportTech} />
      <Route exact path="/spacecapsule/" component={SpaceCapsuleTech} />
    </>
  );
}

export default App;
