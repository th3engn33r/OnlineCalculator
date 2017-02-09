import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class ExtendedKeyboard extends Component{
	
	constructor(props){
		super(props);
		this.abc = '';
	}

	sanitizeInput(array){
		let i = 0;
		let signFlag = false;
		while( i <= array.length ){
			let start = i;
			let j = i;
			while( isNaN(array[j]) && j <= array.length ){
				signFlag = true;
				j++;
			}			
			if(signFlag){
				array = array.substring(0, start) + array.substring(j-1); 
				signFlag = false;
			}
			i++;
		}
		console.log(array);
		return array;
	}

	solveFunction(array){
		console.log( array + " should now be solved");
		let i = 0;
		let c = 0;
		let digit = parseFloat(array);
		while( i <= array.length ){
			
			if(array[i] == '+'){
				array = array.substr(i + 1 );
				digit = digit + parseFloat(array);
				i = 0;
				continue;
			}
			if(array[i] == '-'){
				array = array.substr(i + 1 );
				digit = digit - parseFloat(array);
				i = 0;
				continue;
			}
			if(array[i] == 'x'){
				array = array.substr(i + 1 );
				digit = digit * parseFloat(array);
				i = 0;
				continue;
			}
			if(array[i] == '%'){
				array = array.substr(i + 1 );
				digit = digit / parseFloat(array);
				i = 0;
				continue;
			}

			i++;
		}
		this.abc = digit;
	}

	onChangeDisplay(){
		this.props.onDisplay(this.abc);
	}

	clickFunction(keyPressed){

		if(keyPressed == '='){
			this.abc = this.sanitizeInput(this.abc);
			this.solveFunction(this.abc);
			console.log("array length is " + this.abc);
		}
		else if(keyPressed == 'C'){
			this.abc = ''
		}
		else{
			this.abc = this.abc + keyPressed;
		}
		this.onChangeDisplay();
	}

	render(){
		return(
			<div>
				<div className="row">
					<div className="col-md-12">
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-warning square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-warning square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-warning square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
						<button type="button" className="btn btn-warning square" onClick={this.clickFunction.bind(this)} ><h1></h1></button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
					</div>
				</div>				
			</div>
		)
	}

}

export default ExtendedKeyboard
