import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component{
	constructor(props){
		super(props);
		this.value = '';
		this.state ={
			count: 4
		}
	}

	arrayFunction(){
		//set count
		//monitor input length
		// when input length is less than count
		this.value = this.props.input;
		console.log("length = " + this.props.input.length);
		console.log("count = " + this.state.count);
		if(this.state.count > this.props.input.length){
			this.value = this.value + ' = ' + this.props.input;
		}
		//add '=' and add new input
		console.log("value = " + this.value);
		console.log("input = " + this.props.input);
		console.log(" ");
		return (this.value);
	}

	render(){
		return(
			<div>
			<h1> HISTORY </h1>
			<h3>11+3+4+2=20</h3>
			<h3>{this.arrayFunction()}</h3>

			</div>
		)
	}

}

export default Results
