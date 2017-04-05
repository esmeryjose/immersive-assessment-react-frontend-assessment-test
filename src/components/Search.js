import React, { Component } from 'react'

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      value: "",
    }
  }

  callProp = (event) => {
    const value = event.target.value
    this.setState({value})
    this.props.handleChange(value)
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} placeholder={"Search your most recent transactions"} onChange={this.callProp}/>
      </div>
    );
  }
}

export default Search
