import React, { Component } from 'react';
import Transactions from './Transactions';
import Search from './Search';

class Account extends Component {

  constructor(props){
    super(props);
    this.state = {
      transactions:[],
      searchTransaction:[]
    }
  }

  componentWillMount(){
    var url = "http://localhost:3001/transactions/most_recent";
    fetch(url)
      .then(res=> res.json())
      .then(transactions=> this.setState({
        transactions:transactions,
        searchTransaction:transactions
      }))
  }

  handleChange = (searchTransaction) => {
    this.setState({searchTransaction})
  }

  showAllTransactions = ()=>{
    var url = "http://localhost:3001/transactions";
    fetch(url)
      .then(res=> res.json())
      .then(transactions=> this.setState({
        transactions:transactions,
        searchTransaction:transactions
      }))
  }

  render() {
    return (

      <div>
        <button className="showAllTransactions" onClick={this.showAllTransactions}>
          Show All Transactions
        </button>

        <Search allTransactions={this.state.transactions} handleChange={this.handleChange} />
        <p className="App-intro" >
          Here are your most recent transactions.
        </p>

        <Transactions allTransactions={this.state.transactions} searchTransaction={this.state.searchTransaction} />
      </div>
    )
  }
}

export default Account
