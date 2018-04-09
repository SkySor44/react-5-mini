import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {increment, decrement, undo, redo} from './ducks/counter.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ this.props.currentValue }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => this.props.increment(1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => this.props.increment(5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => this.props.decrement(1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => this.props.decrement(5) }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ false }
              onClick={ () => this.props.undo() }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ false }
              onClick={ () => this.props.redo() }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}

//State here is not component state but redux global state.
//This is where we tell the store what we are subscribing to when state is updated.
//The "cherrypicker function" where you choose what you want from the store to use and to keep updated
function mapStateToProps(state){
return {
    currentValue: state.currentValue,
    futureValues: state.futureValues,
    previousValues: state.previousValues
  }
}

//invokes the answer of the first invoke. The first param is what you want to get from the store. The second is obviously app.js
//this will put the increment action function on props so if you want to invoke it you need to do this.props.increment()
export default connect(mapStateToProps, {increment, decrement, undo, redo})(App);
