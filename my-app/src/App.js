import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
		<h3>Address Book</h3>
		<form>
		<div class="form-group">
				<label for="inputForMobile" class="form-group col-md-2" >Mobile Number:</label>
				<input  class="form-control" id="inputForMobile" aria-describedby="emailHelp" placeholder="Enter mobile number" class="form-group col-md-2"/>
				<small id="emailHelp" class="form-text text-muted form-group col-md-10">We'll never share your mobile number with anyone else.</small>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1" class="form-group col-md-2">Email address:</label>
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" class="form-group col-md-2"/>
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1" class="form-group col-md-2">Password:</label>
				<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" class="form-group col-md-2"/>
			</div>
			<div class="form-group form-check">
				<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
				<label class="form-check-label" for="exampleCheck1">I accpet terms and conditions</label>
			</div>
			<div>
				<button type="button" class="col-md-2 btn btn-outline-success">Submit</button>
				<button type="button" class="col-md-2 btn btn-outline-danger">Clear</button>
			</div>
			</form>
      </div>
    );
  }
}

export default App;
