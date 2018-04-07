import React, {Component} from 'react';
import {Link} from 'react-router-dom'

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
        <Link to={"/"+this.props.cadet.name}><img src={this.props.cadet.url} style={{height: '182px',width: '182px'}}></img></Link>
        <p>Name: {this.props.cadet.name}</p>
        <p>Rank: {this.props.cadet.rank}</p>
        Stores:
        <ul>
          {
            this.props.cadet.stores.map((store, i) => {
              return i >= 3
                ?
                  <li key={i} style={{display:'none', listStyle: 'inside', padding: '20px'}}>{store}</li>
                :
                  <li key={i} style={{listStyle: 'inside', paddingLeft: '20px'}}>{store}</li>
            }
          )}
        </ul>
      </div>
    );
  }
}
