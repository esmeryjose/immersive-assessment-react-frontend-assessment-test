import React, { Component } from 'react'
import {Router, Route, Link, browserHistory} from 'react-router';
import Account from './Account'
import TransactionShow from './TransactionShow'
import AllTransactions from './AllTransactions'
import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href="/">
            <h2>The Royal Bank of Flatiron</h2>
          </a>
        </div>

        <Router history={browserHistory}>
          <Route exact path="/" component={AllTransactions}/>
          <Route exact path="/transactions" component={Account}/>
          <Route path="/transactions/:id" component={TransactionShow}/>
        </Router>

      </div>
    )
  }
}

export default App
