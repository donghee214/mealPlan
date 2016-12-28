import React from "react";
import Landing from "./Body/Landing"
import CenterBubble from "./Body/CenterBubble"

export default class Body extends React.Component {
  render() {

    return (
      <div>
        <Landing topLeft={this.props.topLeft}/>
        <CenterBubble topLeft={this.props.topLeft}/>
      </div>
    );
  }
}