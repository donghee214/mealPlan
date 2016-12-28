import './Layout.css';
import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";



export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topLeft: false };
  }
  moveTopLeft(e) {
     setTimeout(() => this.setState({ topLeft: !this.state.topLeft }),1300);
  }
  render() {
         
    return (
      <div>
        <Header moveTopLeft={this.moveTopLeft.bind(this)} topLeft={this.state.topLeft}/>
        <Body topLeft={this.state.topLeft}>
        </Body>
        <Footer />
      </div>
    );
  }
}