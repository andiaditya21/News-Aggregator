import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
