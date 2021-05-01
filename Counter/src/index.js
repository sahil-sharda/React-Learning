import React, {setState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 1 };
  }

  Up = (e) => {
    this.setState({count: this.state.count + 1 })
  }
  Down = (e) => {
    this.setState({count: this.state.count - 1 })
  }

  render() {
    return (
      <div class="container">
        <h3>Counter</h3>
          <button onClick={this.Up}>
            UP 
          </button>
          <p>{this.state.count}</p>
          <button onClick={this.Down}>
            Down 
          </button>
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
