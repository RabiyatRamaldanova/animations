import React, {Component} from 'react';
import {Animated, ImageBackground, TouchableOpacity, View} from 'react-native';
import {backgroundPicture, logo} from '../images/index';
import styles from '../style/styles';
//import Scenes from 'react-native-scenes';
//import Loading from './loadingScreen';


export default class Splash extends Component {
    constructor () {
        super();
        this.timingValue = new Animated.Value(0);
        this.springValue = new Animated.Value(0);
    }

    componentDidMount () {
        this.animate();
    }

    animate(){
        Animated.sequence([  
        Animated.timing(
            this.timingValue,
            {
                toValue: 1,
                duration: 4000,
                useNativeDriver: false
            }
        ),
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction:1, 
                tension: 1,
                useNativeDriver: false
            }
        )
        ]).start();
    }

    propsForNavigate() {
        const {navigate} = this.props.navigation
        navigate('LOADING')
    }


    render() {

        const opacity = this.timingValue;

        return(
            <Animated.View style={{opacity, ...styles.animatedViewOfFirstScreen}}>
            <ImageBackground source={backgroundPicture} style={styles.animatedBackgroudOfFirstScreen}>
                <View  style={styles.viewForButtonOfFirstScreen}>
                    <TouchableOpacity onPress={()=> this.propsForNavigate() }>
                        <Animated.Image
                        source={logo}
                        style={{ transform: [{scale: this.springValue}], ...styles.animatedButton}}>
                        </Animated.Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            </Animated.View>
        );
    }
}//this.props.push({component: Loading})