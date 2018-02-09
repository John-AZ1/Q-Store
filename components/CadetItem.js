import React, {Component} from 'react';
export default class CadetItem extends Component {
  /* props = {cadet: {
    name: '',
    rank: '',
    stores: []
  }} */
  render() {
    let style={
      backgroundColor: '#ebffeb',
      padding: '10px',
      lineHeight: '24px',
      height: '330px'
    }
    return(
      <div style={{...style, ...this.props.style}}>
        <img src='../man-user.png' style={{height: '182px',width: '182px'}}></img>
        <p>Name: {this.props.cadet.name}</p>
        <p>Rank: {this.props.cadet.rank}</p>
        Stores:
        <ul>
          {this.props.cadet.stores.splice(0,3).map(store =>
            <li>{store}</li>
          )}
        </ul>
      </div>
    );
  }
}
