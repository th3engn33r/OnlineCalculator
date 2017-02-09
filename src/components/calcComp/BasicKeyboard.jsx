import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ExtendedKeyboard from './ExtendedKeyboard.jsx'

class BasicKeyboard extends Component{
	
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
		console.log("This is = " + this.abc);
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
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'7')} ><h1>7</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'8')} ><h1>8</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'9')} ><h1>9</h1></button>
						<button type="button" className="btn btn-warning square" onClick={this.clickFunction.bind(this,'C')} ><h1>C</h1></button>
						<button type="button" className="btn btn-default square" ></button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'4')} ><h1>4</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'5')} ><h1>5</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'6')} ><h1>6</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'-')} ><h1>-</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'%')} ><h1>%</h1></button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'1')} ><h1>1</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'2')} ><h1>2</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'3')} ><h1>3</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'+')} ><h1>+</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'x')} ><h1>x</h1></button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'.')} ><h1>.</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this,'0')} ><h1>0</h1></button>
						<button type="button" className="btn btn-default square" onClick={this.clickFunction.bind(this)} ><h3>E</h3></button>
						<button type="button" className="btn btn-danger square" onClick={this.clickFunction.bind(this,'=')} ><h1>=</h1></button>
						<button type="button" className="btn btn-default square" ></button>
					</div>
				</div>		
				<div className="row">
					<div className="col-md-12">
						<br />
						<ExtendedKeyboard />
					</div>
				</div>
			</div>
		)
	}

}
export default BasicKeyboard
