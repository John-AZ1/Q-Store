import React, {Component} from 'react';
export default class Filter extends Component {
  render() {
    return(
      <input type="text" onKeyUp={event => this.props.onTextChange(event.target.value)}/>
    );
  }
}
