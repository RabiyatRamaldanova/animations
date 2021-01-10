import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash';
import Loading from '../screens/loadingScreen';
import {NavigationContainer} from '@react-navigation/native';
//import Scenes from 'react-native-scenes';

const Stack = createStackNavigator();

export default class StackNavig extends Component {

    render () {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode={'none'}>
                    <Stack.Screen name="LOGO" component={Splash}/>
                    <Stack.Screen name="LOADING" component={Loading}/>
                </Stack.Navigator>
            </NavigationContainer>
            // <Scenes
            // route={{key: 'Splash', component:Splash, headerMode: 'float' }}
          ///>
        );
    }
}