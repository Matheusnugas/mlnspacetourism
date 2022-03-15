import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
