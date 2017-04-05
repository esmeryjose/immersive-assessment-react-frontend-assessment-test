import React, { Component } from 'react'
import Transaction from './Transaction'

class Transactions extends Component {

  constructor(props){
    super(props)
    this.state = {
      allTransactions: props.allTransactions
    }
  }

  renderTransaction = (transaction) =>{
    return(
      <Transaction key={transaction.id} data={transaction}/>
    )
  }

  render() {
    return(
    <table>
      <tbody>
        <tr>
          <th>Posted At</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        {!!this.props.searchTransaction.length ?
          this.props.searchTransaction.map(this.renderTransaction) :
          this.props.allTransactions.map(this.renderTransaction)}
      </tbody>
    </table>
    )
  }
}

export default Transactions
