// imports
import React, {Component} from 'react'
import {CadetItem, Heading, Filter} from '../components'
import 'reset-css/reset.css';
import {connect} from 'react-redux'
import {setMessage} from '../actions/message'
import {Link} from 'react-router-dom'
// import data from '../data'
let data = [
      {
        "url":"../photos/man-user.png",
        "name": "Macdonald",
        "rank": "CPL",
        "stores": [
          "Japara",
          "Field Pack",
          "KFF",
          "Hotchie",
          "Compass",
          "Rising Sun",
          "Compass",
          "Hotchie",
          "Japara",
          "Hotchie Cord",
          "KFF",
          "KFF",
          "Hotchie Cord"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Mcdonald",
        "rank": "RCRT",
        "stores": [
          "Field Pack",
          "Compass",
          "KFS",
          "KFS",
          "Japara",
          "Hotchie",
          "KFS",
          "Compass",
          "Field Pack"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Mendez",
        "rank": "WO2",
        "stores": [
          "Hotchie",
          "KFF",
          "KFF",
          "KFS",
          "Rising Sun",
          "Japara",
          "Japara",
          "Hotchie Cord",
          "Field Pack"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Fitzpatrick",
        "rank": "CPL",
        "stores": [
          "Hotchie",
          "Rising Sun",
          "Field Pack"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Anderson",
        "rank": "LCPL",
        "stores": [
          "Japara",
          "Rising Sun",
          "Hotchie Cord",
          "Field Pack",
          "Rising Sun"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Richards",
        "rank": "LCPL",
        "stores": [
          "Compass",
          "Rising Sun",
          "Rising Sun",
          "Compass",
          "KFF",
          "Compass"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Everett",
        "rank": "WO2",
        "stores": [
          "Compass",
          "Hotchie Cord",
          "Compass",
          "KFF",
          "Japara",
          "KFS",
          "Rising Sun",
          "Rising Sun",
          "KFF",
          "KFS",
          "KFF",
          "Compass",
          "Japara",
          "Rising Sun"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Serrano",
        "rank": "SGT",
        "stores": [
          "Japara",
          "Field Pack"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Albert",
        "rank": "CDT",
        "stores": [
          "Japara",
          "Hotchie Cord",
          "Compass",
          "Japara",
          "Hotchie Cord",
          "KFS",
          "KFS",
          "Rising Sun",
          "Hotchie Cord",
          "Compass",
          "Field Pack"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Moreno",
        "rank": "LCPL",
        "stores": [
          "KFF"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Short",
        "rank": "SGT",
        "stores": [
          "Japara",
          "Rising Sun",
          "Hotchie Cord"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Fischer",
        "rank": "CPL",
        "stores": [
          "Japara",
          "Hotchie Cord",
          "Rising Sun",
          "Hotchie Cord"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Barnett",
        "rank": "CDT",
        "stores": [
          "Hotchie Cord",
          "Rising Sun",
          "Field Pack",
          "KFF",
          "Japara",
          "KFS",
          "Rising Sun",
          "Japara",
          "KFF",
          "Rising Sun",
          "KFF",
          "Hotchie",
          "Field Pack"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Alvarado",
        "rank": "SGT",
        "stores": [
          "Rising Sun",
          "Field Pack",
          "KFF",
          "Compass",
          "Hotchie",
          "KFS",
          "Japara",
          "KFS",
          "KFS",
          "Hotchie",
          "Japara",
          "KFF",
          "Rising Sun",
          "KFS"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Best",
        "rank": "CUO",
        "stores": [
          "KFF"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Decker",
        "rank": "CUO",
        "stores": []
      },
      {
        "url":"../photos/man-user.png",
        "name": "Benton",
        "rank": "CUO",
        "stores": [
          "Japara",
          "Hotchie",
          "Compass",
          "Japara",
          "KFS"
        ]
      },
      {
        "url":"../photos/man-user.png",
        "name": "Norton",
        "rank": "CUO",
        "stores": [
          "Japara",
          "Rising Sun",
          "Japara",
          "Compass",
          "KFF",
          "Compass",
          "Rising Sun",
          "KFF",
          "KFF",
          "Japara",
          "Japara",
          "KFF",
          "Rising Sun"
        ]
      }
    ]


class App extends Component {
	constructor() {
		super()
		this.state = {cadetData: data, filter: ''}
	}

	render() {
		let textStyle = {fontFamily:'helvetica',fontSize: 'inherit'}
		let repeat = Math.floor(window.innerWidth/216)
		let times = 'repeat('+repeat+',200px)'
		let gridTemplate = {
			display: 'grid',
			gridTemplateColumns: times,
			gridGap: '10px',
			gridAutoflow: 'dense',
			gridAutoRows: '350px',
		}
		return (
			<div>
				<Heading style={{...textStyle}}>Q-Store</Heading>
				<Filter onTextChange={filter => this.setState({filter: filter})}></Filter>
				<div style={gridTemplate}>
					{this.state.cadetData.filter(cadet => {
						// 	cadet.name.includes(this.state.filter)
						// ||
						// 	cadet.rank.includes(this.state.filter)
            // ||
              for (var i = 0; i < cadet.stores.length; i++) {
                if (cadet.stores[i].includes(this.state.filter)) {
                  return true
                } else if (cadet.name.includes(this.state.filter)) {
                  return true
                } else if (cadet.rank.includes(this.state.filter)) {
                  return true
                }
              }
						})
						.map((cadet, i) =>
							<CadetItem key={i} style={textStyle} cadet={cadet} filter={this.state.filter}></CadetItem>)
					}
				</div>
				{
					//<div style={{display:'fixed'}}>Icon made by Freepik from www.flaticon.com</div>
				}
			</div>
		)
	}
}

export default connect(state => state)(App)
