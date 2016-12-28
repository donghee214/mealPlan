import React from "react";
import Typist from 'react-typist';
import '../../../node_modules/react-typist/dist/Typist.css';
import Subtitle from "./Subtitle";
import {Motion, spring} from '../../../node_modules/react-motion/build/react-motion';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, open: false };
        setTimeout(() => this.setState({ open: true }), 3000);
        setTimeout(() => this.setState({ line: true }), 2300);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }
    handleMouseDown(e) {
        this.setState({ open: !this.state.open });
    }

    handleChange(e) {
        this.props.moveTopLeft()
    }

    render() {
        return (
            <div>
                <div onMouseDown={this.handleMouseDown} onClick={this.handleChange.bind(this) } className="middle">
                    <Typist className="center" startDelay={1000}>MealPlan
                    </Typist>
                    <Motion style={{ x: spring(this.state.line ? 30 : 0) }} >
                        {value => {
                            return <div style={{
                                width: value.x + 'vw',
                                position: 'absolute',
                                height: 7,
                                transform: `scale(1,1)`,
                                color: 'black',
                                backgroundColor: 'black',
                                right: 0,
                                bottom: 0.3 + 'vw',
                            }}
                                ></div>
                        } }
                    </Motion>
                </div>
                <Subtitle open={this.state.open} />
            </div>

        );
    }
}