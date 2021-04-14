import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from "./pages/Landing"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/wedding-invitation">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
