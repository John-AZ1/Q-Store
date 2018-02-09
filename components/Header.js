import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    let style = {
      fontSize: '64px'
    }
    return(
      <div style={style}>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}
