import React, {Component} from 'react'
import AllTransactions from './AllTransactions'

class TransactionShow extends Component {

  constructor(props){
    super(props)
    this.state = {
      id: props.params.id,
      created_at: "",
      posted_at: "",
      description: "",
      category: "",
      amount: ""
    }
  }

  componentWillMount(){
    var url = `http://localhost:3001/transactions/${this.state.id}`;
    fetch(url)
      .then(res=> res.json())
      .then(transaction=>
        this.setState({
          created_at: transaction.created_at,
          posted_at: transaction.posted_at,
          description: transaction.description,
          category: transaction.category,
          amount: transaction.amount
        })
      )
  }

  render(){
    return(
      <div>
        <AllTransactions/>
        <table>
          <tbody>
            <tr>
              <th>Created At</th>
              <th>Posted At</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            <tr>
              <th>{this.state.created_at}</th>
              <th>{this.state.posted_at}</th>
              <th>{this.state.description}</th>
              <th>{this.state.category}</th>
              <th>{this.state.amount}</th>
            </tr>
          </tbody>
        </table>
      </div>


    )
  }
}

export default TransactionShow
