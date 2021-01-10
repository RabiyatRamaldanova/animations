import React, {Component} from 'react';
import { View, Animated, ImageBackground, Image, Dimensions } from 'react-native';
import {kotik, backgroundPicture, pleaseWait} from '../images/index';
import styles from '../style/styles';

let deviceWidth = Dimensions.get('window').width;
const catsWidth = styles.dimensionsOfCats.width;
const catsQuantity = Math.floor(deviceWidth/(catsWidth));

    const array = [];
    for(let i = 0; i<catsQuantity; i++) {
        array.push(i);
    }

export default class Loading extends Component {
    constructor () {
        super()
        this.animatedValue = [];
        array.forEach((value) => {
        this.animatedValue[value] = new Animated.Value(0);
        })
    }

    componentDidMount () {
        this.animate()
      }


    animate () {
        array.forEach((value) => {
            this.animatedValue[value].setValue(0)
        })
        
        const animations = array.map((item) => (
            
            Animated.timing(
            this.animatedValue[item],
            {
              toValue: 1,
              duration: 500,
              useNativeDriver: true
            }
          )
        ))
        Animated.sequence(animations).start(() => this.animate())
      }

render () {
    const animations = array.map((item, index) => {
      return <Animated.Image key={index} source={kotik}  style={{opacity: this.animatedValue[item],...styles.dimensionsOfCats}} />
    })
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundPicture} style={styles.backgroundOfSecondScreen}>
            <Image source={pleaseWait} style={styles.pleaseWaitImage}/>
            <View style={styles.kotiki}>
                {animations}
            </View>
        </ImageBackground>
      </View>
    )
  }
}

