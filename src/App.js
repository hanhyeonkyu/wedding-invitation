import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ReactAudioPlayer from "react-audio-player";
import waltz from "./sounds/waltz.ogg";

const App = () => {
  return (
    <div className="App">
      <ReactAudioPlayer
        autoPlay
        loop
        controls
        src={waltz}
        style={{ width: "100%", height: "20px" }}
      />
      <Router>
        <Switch>
          <Route exact path="/wedding-invitation">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
