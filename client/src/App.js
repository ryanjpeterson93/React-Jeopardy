import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => (
  <Fragment>
    
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/XXX" component={XXX} /> */}
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
