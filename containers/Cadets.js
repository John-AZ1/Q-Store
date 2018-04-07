// imports
import React, {Component} from 'react'
import {Heading, Filter} from '../components'
import 'reset-css/reset.css';
import {connect} from 'react-redux'
import {setMessage} from '../actions/message'
import {Link} from 'react-router-dom'
import data from '../data'
import updateData from '../data'

class Cadets extends Component {
	constructor() {
		super()
		this.state = {url: '', name: '', rank: '', stores: []}
	}
  componentDidMount() {
    this.setState({
      url: data.filter(cadet => cadet.name == this.props.match.params.cadet)[0].url,
      name: data.filter(cadet => cadet.name == this.props.match.params.cadet)[0].name,
      rank: data.filter(cadet => cadet.name == this.props.match.params.cadet)[0].rank,
      stores: data.filter(cadet => cadet.name == this.props.match.params.cadet)[0].stores
    })
  }
  render() {
    let style={
      display: 'grid',
      padding: '10px',
      lineHeight: '24px',
      fontFamily: 'helvetica',
      gridTemplateRows: '202px auto',
      gridTemplateColumns: '187px auto',
      gridTemplateAreas: "'pic info' 'stores stores'"
    }
    return (
      <div style={style}>
        <img src={this.state.url} style={{gridArea: 'pic', height: '182px', width: '182px'}}></img>
        <div style={{gridArea: 'info'}}>
          <p id="name"><b>Name: </b>{this.state.name}</p>
          <p id="rank"><b>Rank: </b>{this.state.rank}</p>
        </div>
        <p style={{gridArea: 'stores'}} id="stores"><b>Stores: </b></p>
        <ul>{this.state.stores.map((store, i) => <li style={{gridArea: 'stores', listStyle: 'inside', paddingLeft: '20px'}} key={i}>{store}</li>)}</ul>
        <div>
          <input name="item" id="issue" onSubmit={() => console.log("Issue")}></input>
          <button onClick={(e) => {
                let items = document.getElementById('issue').value.split("|")
                items.map(item => data[0].stores.push(item))
                console.log(this.state.stores)
                updateData(data)
                this.forceUpdate()
                e.preventDefault()
            }} type="submit">Issue</button>
          <input id="return" onSubmit={() => console.log("Return")}></input><button onSubmit={() => console.log("Return")}>Return</button>
          <p>Seperate Items with |</p>
        </div>
      </div>
    );
  }
}
export default connect(state => state)(Cadets)
