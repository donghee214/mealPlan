import React from "react";
import {Motion, spring} from '../../../node_modules/react-motion/build/react-motion';

export default class CenterBubble extends React.Component {

    render() {
        return (
            <Motion style={{ x: spring(this.props.topLeft ? 20 : 0) }} >
                {value => {
                    return <div style={{
                height: value.x + 'vw',
                width: value.x + 'vw',
                borderRadius: value.x +'vw',
                position:'relative',
                top:'33vh',
                left: '40%',
                zIndex: '2',
                backgroundColor:'#7A7A7A',
                overflow:'hidden', 
                    }}
                        ></div>
                } }
            </Motion>
        );
    }
}