import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Layout from './calcComp/Layout.jsx'
import Results from './calcComp/Results.jsx'
import BasicKeyboard from './calcComp/BasicKeyboard.jsx'

class App extends Component{

	constructor(props){
		super(props);
		this.abc = '';
		this.state = {
			display: ''
		}
	}

	updateDisplay(newDisplay){
		this.setState({
			display: newDisplay
		})
	}

	render(){
		return(
			<div>
				<Layout />
				<div className="row">
					<div className="col-sm-1">
					</div>						
					<div className="col-sm-4">
						<input className="form-control input-lg big" type="text" value = {this.state.display}/>
						<br />
						<BasicKeyboard onDisplay = {this.updateDisplay.bind(this)}/>
					</div>
					<div className="col-sm-1">
					</div>												
					<div className="col-sm-1">
					</div>												
					<div className="col-sm-4">
						<Results input = {this.state.display} />
					</div>						
					<div className="col-sm-1">
					</div>												
				</div>
			</div>
		)
	}

}

export default App