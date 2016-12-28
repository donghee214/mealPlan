import React, {Component} from 'react';
import {Motion, spring, presets} from '../../../node_modules/react-motion/build/react-motion';
import Transition from 'react-motion-ui-pack'
export default class Title extends React.Component {



    render() {
        return (
            <div>
                <Motion style={{x: spring(this.props.open ? 1 : 0), y: spring(this.props.open ? 0 : -50) }}>
                    {value => {
                        return <div style={{
                            opacity: value.x,
                            display: 'block',
                            borderBottom: '6px black solid',
                            borderRight: '6px black solid',
                            fontSize: '3em',
                            paddingRight:2,
                            WebkitTransform: `translate3d(0, ${value.y}%, 0)`,
                            transform: `translate3d(0, ${value.y}%, 0)`,
                            width: '59%'
                        }}
                            >Username</div>
                    } }
                </Motion>
                <Motion style={{x: spring(this.props.open ? 1 : 0),y: spring(this.props.open ? 0 : -100)}}>
                    {value => {
                        return <div style={{
                            opacity: value.x,
                            display: 'block',
                            borderBottom: '6px black solid',
                            borderRight: '6px black solid',
                            fontSize: '3em',
                            paddingRight:2,
                            WebkitTransform: `translate3d(0, ${value.y}%, 0)`,
                            transform: `translate3d(0, ${value.y}%, 0)`,
                            width: '59%'
                        }}
                            >Password</div>
                    } }
                </Motion>
            </div>
        );
    }
}

