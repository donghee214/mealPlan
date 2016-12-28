import React from "react";
import background from './foodBackground.jpg';
import '../../../node_modules/react-typist/dist/Typist.css';
import {Motion, spring, presets} from '../../../node_modules/react-motion/build/react-motion';

export default class Landing extends React.Component {
    render() {
        return (
            <img src={background} className={"zoom" + (this.props.topLeft ? " zoomOut": " zoomIn")}>

            </img>



        );
    }
}