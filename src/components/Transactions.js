import React, { Component } from 'react'
import Transaction from './Transaction'


class Transactions extends Component {

  renderTransaction = (transaction) =>{
    return(
        <Transaction key={transaction.id} id={transaction.id} data={transaction}/>
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
        {this.props.searchTransaction.map(this.renderTransaction)}
      </tbody>
    </table>
    )
  }
}

Transactions.propTypes = {
  allTransactions: React.PropTypes.array.isRequired,
  searchTransaction: React.PropTypes.array.isRequired
}

export default Transactions
