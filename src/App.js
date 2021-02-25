// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Technology, Science, DetailTechnology } from "./pages";
import { Carousel, Navbar } from "./components/molecules";

function App() {
  return (
    <Router>
      <Carousel />
      <Navbar />
      <Route path="/" exact component={Technology} />
      <Route path="/science" component={Science} />
      {/* <Route path="/detail-news/:id" component={DetailNews} /> */}
      <Route path="/technology/:id" component={DetailTechnology} />
    </Router>
  );
}

export default App;
