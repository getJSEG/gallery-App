import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import MainPage from './components/MainPage';
import Error404 from './components/Error404';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path='/' render={ () => <Redirect to={'/search/cars'} /> } />
            <Route path='/search/:query' component={ MainPage } />
            <Route component={ Error404 } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
