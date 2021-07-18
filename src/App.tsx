import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Context from './context';
import RecoilPage from './recoil';
import ReduxPage from './redux';
function App() {
  return (
      <Router>
        <h1>一级路由</h1>
        <nav>
          <ul>
            <li>
              <Link to="/recoil">recoil</Link>
            </li>
            <li>
              <Link to="/redux">redux</Link>
            </li>
            <li>
              <Link to="/context">useContext + useReducer</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/recoil">
            <RecoilPage />
          </Route>
          <Route path="/redux">
            <ReduxPage />
          </Route>
          <Route path="/context">
            <Context />
          </Route>
          <Redirect from="/*" to='/recoil' />
        </Switch>
      </Router>
  )
}

export default App
