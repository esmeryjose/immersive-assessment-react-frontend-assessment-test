import React, { Component } from 'react'

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: ""
    }

  }

  updateState = (event)=>{
    var searchTerm = event.target.value
    this.setState({searchTerm})
    this.searchRequest(searchTerm)
  }

  searchRequest = (searchTerm) => {
    // var searchTransaction = [];
    // this.props.allTransactions.forEach((transaction)=>{
    //   if (transaction.description.toLowerCase().includes(searchTerm)) {
    //     searchTransaction.push(transaction)
    //   }
    // })

    var url = `http://localhost:3001/transactions/search?search=${searchTerm}`;
    fetch(url)
      .then(res=> res.json())
      .then(transactions=> this.props.handleChange(transactions))
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} placeholder={"Search your most recent transactions"} onChange={this.updateState}/>
      </div>
    );
  }
}

Search.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  allTransactions: React.PropTypes.array.isRequired
}

export default Search
