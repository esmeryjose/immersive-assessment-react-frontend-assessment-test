import React, {Component} from 'react'
import {Link} from 'react-router';


class Transaction extends Component {

  render() {
    return (
        <tr>
          <td>{this.props.data.posted_at}</td>
          <Link to={`/transactions/${this.props.id}`}>
          <td>{this.props.data.description}</td>
          </Link>
          <td>{this.props.data.category}</td>
          <td>{this.props.data.amount}</td>
        </tr>
    )
  }
}

Transaction.propTypes = {
  data: React.PropTypes.shape({
    posted_at: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    category: React.PropTypes.string.isRequired,
    amount: React.PropTypes.number.isRequired
  }).isRequired
}

export default Transaction
