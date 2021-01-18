import React, {Component} from 'react';
import DrawerNavigation from './navigation/drawerNavigation';
import Splash from './animationScreens/splash';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isSplashScreen: true
    }
  }

  componentDidMount () {
    setTimeout(() => { this.setState({isSplashScreen: false}) },4000)
  }

  render() {
      if (this.state.isSplashScreen == false) {
        return(<DrawerNavigation/>);
      }
      else if(this.state.isSplashScreen == true) {
        return(<Splash/>)
      }
  }
}

export default App;