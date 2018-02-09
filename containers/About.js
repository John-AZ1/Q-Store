import React, {Component} from 'react'
import {Header} from '../components'
import {Link} from 'react-router-dom'
export default class About extends Component {
	render() {
		return (
			<div>
				<Header>About</Header>
				<Link to='/'>
					<button>Go Home</button>
				</Link>
			</div>
		)
	}
}
