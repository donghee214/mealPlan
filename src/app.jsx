import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
class Layout extends React.Component{
  render(){
    return (
      <h1> It works!</h1>
    )
  }
}
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a href="/" className="btn btn-primary btn-lg">Enjoy!</a></p>
      </div>
    )
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}


