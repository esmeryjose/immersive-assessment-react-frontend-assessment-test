import React, { Component } from 'react'

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: "",
    }

  }

  updateState = (event)=>{
    var searchTerm = event.target.value
    console.log("1 "+searchTerm)
    this.setState({searchTerm})
    this.filter(searchTerm)
  }

  filter = (searchTerm) => {
    var searchTransaction = [];
    this.props.allTransactions.forEach((transaction)=>{
      if (transaction.description.toLowerCase().includes(searchTerm)) {
        searchTransaction.push(transaction)
      }
    })
    this.props.handleChange(searchTransaction)
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} placeholder={"Search your most recent transactions"} onChange={this.updateState}/>
      </div>
    );
  }
}

export default Search
