import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigationCalc} from './stackNavigationCalc';
import {StackNavigationApi} from './stackNavigationFilm';
import {TabNavigation} from './tabNavigation';
import {News} from './newsNavigation';


const Drawer = createDrawerNavigator();

class DrawerNavigation extends Component {
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator drawerContentOptions={{
          activeTintColor: 'red',
          labelStyle: {fontSize: 20}
        }}>
          <Drawer.Screen name="News" component={News} />
          <Drawer.Screen name="Entertainment" component={StackNavigationApi}/>
          <Drawer.Screen name="Tools" component={StackNavigationCalc}/>
          <Drawer.Screen name="AboutMe" component={TabNavigation}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
export default DrawerNavigation;