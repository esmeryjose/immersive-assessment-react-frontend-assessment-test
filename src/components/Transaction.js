import React, {Component} from 'react'

class Transaction extends Component {

  constructor(props){
    super(props)
    
  }

  render() {
    return (
      <tr>
        <td>{this.props.data.posted_at}</td>
        <td>{this.props.data.description}</td>
        <td>{this.props.data.category}</td>
        <td>{this.props.data.amount}</td>
      </tr>
    )
  }
}

export default Transaction
