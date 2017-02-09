import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component{
	render(){
		return(
			<div>
				<nav className="navbar navbar-inverse">
		          <div className="container">
		            <div className="navbar-header">
		              <label className="navbar-brand">CALC</label>
		            </div>
		          </div>
		        </nav>
				<div className="container-fluid">
					<br /><br /><hr />
				</div>
			</div>
		)
	}

}

export default Layout
