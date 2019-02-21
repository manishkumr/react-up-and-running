import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'
import './index.css';
import * as serviceWorker from './serviceWorker';
/**
var component = createReactClass({
  render: function() {
    return <span>My name is  {this.props.name} </span>;
  }
});
var ComponentFactory = React.createFactory(component)
ReactDOM.render(
     React.createElement(component,{name: "Manish"}),
    document.getElementById("app")
);
**/
var logMixin = {
    _log : function (methodName, args) {
            console.log(this.name + '::' + methodName, args)
    },
    componentWillUpdate:  function() {
    this._log('componentWillUpdate',  arguments);
    },
    componentDidUpdate:   function(oldProps, oldState) {
        this._log('componentDidUpdate',   arguments);
    },
    componentWillMount:   function() {
        this._log('componentWillMount',   arguments);
    },
    componentDidMount:    function() {
        this._log('componentDidMount',    arguments);
    },
    componentWillUnmount: function() {
        this._log('componentWillUnmount', arguments);
  },
}

var Counter = createReactClass({
    name: 'Counter',
    mixins: [logMixin],
    propTypes: {
        count: PropTypes.number.isRequired,
    },
    render: function () {
        return <span>{this.props.count}</span>
    }
});

var TextAreaCounter = createReactClass({
    getDefaultProps: function () {
      return {
          text: '',
      };
    },
    getInitialState: function () {
        return {
            text: this.props.text
        };
    },
    _textChange: function(ev) {
      this.setState({
          text: ev.target.value,
          }

      )
    },
    render: function () {
        console.log(this)
        var counter = null;
        if (this.state.text.length > 0 ){

            counter  =
                <h3>
                    <Counter count={this.state.text.length}/>
            </h3>
        }
        return <div>
            <textarea onChange={this._textChange} value={this.state.text}> </textarea>
            {counter}
        </div>

    }
});



var myComp = ReactDOM.render(
     React.createElement(TextAreaCounter,{
        text: "Manish",
     }),
    document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
