import React from "react";
import Title from "./Header/Title";
import Subtitle from "./Header/Subtitle";
import {Motion, spring} from '../../node_modules/react-motion/build/react-motion';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value1: 50, value2: 20 };
    }

    render() {

        return (
            <Motion style={{ x: spring(this.props.topLeft ? 0 : 120), y: spring(this.props.topLeft ? 0 : 75) }} >
                {value => {
                    return <div style={{
                        position: 'absolute',
                        WebkitTransform: `translate3d(${value.x}%, ${value.y}%, 0)`,
                        transform: `translate3d(${value.x}%, ${value.y}%, 0)`,
                        zIndex: '1',
                    }}
                        ><Title moveTopLeft={this.props.moveTopLeft.bind(this) } topLeft={this.state.topLeft}/></div>
                } }
            </Motion>
        );
    }
}