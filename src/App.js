// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Technology, Science, Sport, Health } from "./pages";
import { Carousel, Navbar } from "./components/molecules";

function App() {
  return (
    <Router>
      <Carousel />
      <Navbar />
      <Route path="/" exact component={Technology} />
      <Route path="/science" component={Science} />
      <Route path="/sport" component={Sport} />
      <Route path="/health" component={Health} />
    </Router>
  );
}

export default App;
