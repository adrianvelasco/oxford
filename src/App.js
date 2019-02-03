import React from 'react';

import { connect } from 'react-redux';

import { activateGeod, closeGeod } from './redux';

// App.js
export class App extends React.Component {
constructor(){
  super();
  this.state = {
    title: ''
  }

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.hancleClose = this.hancleClose.bind(this);
}

  handleInputChange(e){
      const {value, name} = e.target;
      this.setState({
          [name]: value
      });
  }

  handleClick = () => {
    this.props.activateGeod({title: this.state.title})
  }

  hancleClose = () => {
    this.props.closeGeod();
    this.setState({ title : ""})
  }



  render() {
    return (
      <div>
        <h1>{this.props.geod.title || 'Hello World!'}</h1>
        {this.props.geod.title ? (
          <button onClick={this.hancleClose}>Exit Geod</button>
        ) : (
        <div>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
          <button
            onClick={this.handleClick}>
            Click Me!
          </button>
        </div>
        )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer