import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NorthAmerica from './YourContinent';

// This is JSX. 

function App() {
  //We can create any variables except Objects.
  const title = "Welcome to Novigrad";
  const testing = true;
  const link = "https://www.google.com";

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/YourContinent">
            <NorthAmerica></NorthAmerica>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;