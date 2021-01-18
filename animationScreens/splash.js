import React, {Component} from 'react';
import {Animated, Image} from 'react-native';
import {backgroundPicture} from '../image/index';
import styles from '../styles/styles';

export default class Splash extends Component {

    constructor (props) {
        super(props);
        this.timingValue = new Animated.Value(0);
    }

    componentDidMount () {
        this.animate();
    }

    animate(){ 
        Animated.timing(
            this.timingValue,
            {
                toValue: 1,
                duration: 4000,
                useNativeDriver: false
            }
        ).start();
    }

    render() {
        const opacity = this.timingValue;
        console.log("splash is loading")

        return(
           <Animated.View style={{opacity, ...styles.animatedViewOfFirstScreen}}>
            <Image source={backgroundPicture} style={styles.animatedBackgroudOfFirstScreen}/>
            </Animated.View>
        );
    }
}