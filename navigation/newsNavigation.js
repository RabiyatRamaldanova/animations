import React, {Component} from 'react';
import { View, TouchableOpacity, Image, Text, AppState } from 'react-native';
import {WebView} from 'react-native-webview';
import {IMAGEHAMBURGER} from '../image/index';
import Loading from '../animationScreens/loadingScreen';
import styles from '../styles/styles';
import Toast from 'react-native-simple-toast';
import NetInfo from "@react-native-community/netinfo";


export class News extends Component {

  constructor (props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      isAnimationLoading: false,
      isReachable: false
    }
  }

  changeReachableProps = () => {
    NetInfo.addEventListener( state => {
      if(state.isInternetReachable == false) {
        alert("No internet connection!")
      }
    });
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) && nextAppState === "active"
    ) {
      Toast.show('Welcome back!');
      }
      this.setState({appState: nextAppState});
  }
  
  componentDidMount () {
    this.changeReachableProps();
    AppState.addEventListener("change",this._handleAppStateChange);
  }

  componentWillUnmount () {
    this.changeReachableProps();
    AppState.removeEventListener("change", this._handleAppStateChange);
  }
  
  animationLoading () {
    this.setState({ isAnimationLoading: false })
  }
  animationLoadingStart () {
    this.setState({ isAnimationLoading: true})
  }
 
  render () {

      return (
        
      <View style={styles.barView}>
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
        <Image source={IMAGEHAMBURGER} style={styles.imageHamburger}/>
      </TouchableOpacity>
      <Text style={styles.newsBarText}> 
        News
      </Text>
      </View>
      
        
         <WebView onLoad={() => this.animationLoading()} onLoadStart={() => this.animationLoadingStart()} style={this.state.isAnimationLoading ? styles.webviewOnLoading : styles.webview} source={{
            uri: 'https://www.bbc.com/news'}}/>
         { this.state.isAnimationLoading && <Loading/> }
       </View>
    )
    }
  }
