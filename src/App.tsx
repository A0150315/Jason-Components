import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Audio from "./demo/audio";

function Home() {
  return <Link to="/audio">Audio</Link>;
}

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/audio" component={Audio} />
    </Router>
  );
};

export default App;
