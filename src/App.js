import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Main, About, Board, Ticker, Login } from './routes'
import { Menu } from './components'

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Menu />
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={ Main } />
            <Route path='/board' component={ Board } />
            <Route path='/ticker' component={ Ticker } />
            <Route path='/about' component={ About } />
            <Route path='/login' component={ Login } />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;