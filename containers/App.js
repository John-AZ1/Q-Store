// imports
import React, {Component} from 'react'
import {CadetItem, Header} from '../components'
import 'reset-css/reset.css';
import {connect} from 'react-redux'
import {setMessage} from '../actions/message'
import {Link} from 'react-router-dom'

var fakeData = [
	{
		name: 'Spedding',
		rank: 'CPL',
		stores: ['Hotchie','Japara','KFF','KFS','Rising Sun','Field Pack']
	},
	{
		name: 'Hedger',
		rank: 'CPL',
		stores: ['Hotchie','Compass','KFF','KFS','Rising Sun','Field Pack']
	},
	{
		name: 'Towk',
		rank: 'CDT',
		stores: []
	},
	{
		name: 'Hunt',
		rank: 'RCRT',
		stores: ['KFS','Rising Sun','Field Pack','Japara']
	},
	{
		name: 'Cresp',
		rank: 'RCRT',
		stores: ['KFS','Rising Sun','Field Pack','Japara']
	},
	{
		name: 'Piotrowski',
		rank: 'RCRT',
		stores: ['KFS','Rising Sun','Field Pack','Japara']
	},
]

class App extends Component {
	constructor() {
		super()
		this.state = {cadetData: fakeData}
	}
	render() {
		let textStyle = {fontFamily:'helvetica'}
		let gridTemplate = {
			display: 'grid',
			gridTemplateColumns: 'repeat(5,200px)',
			gridGap: '10px',
			gridAutoflow: 'dense',
			gridAutoRows: '350px',
		}
		return (
			<div>
				<Header style={{...textStyle, gridRow: '1'}}>Q-Store</Header>
				<div style={gridTemplate}>
					{this.state.cadetData.map(cadet => <CadetItem style={textStyle} cadet={cadet}></CadetItem>)}
				</div>
				{
					//<div style={{display:'fixed'}}>Icon made by Freepik from www.flaticon.com</div>
				}
			</div>
		)
	}
}

export default connect(state => state)(App)
