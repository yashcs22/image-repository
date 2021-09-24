import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
      <div className="app">
          <Header/>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/test">
              {Home}
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
