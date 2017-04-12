import React, { Component } from 'react'
import {Link} from 'react-router';

class AllTransactions extends Component {

  render(){
    return(
      <Link to={"/transactions"}>
        <button className="showAllTransactions">
          Show All Transactions
        </button>
      </Link>
    )
  }
}

export default AllTransactions
