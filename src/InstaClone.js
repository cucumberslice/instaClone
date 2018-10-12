import React, { Component } from 'react'
import { 
    View, 
    Text, 
    
} from 'react-native'
import {createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {MainFeed, Login, Camera, Profile, Register} from './components/screens'


const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
})

const IntroStack = createStackNavigator({
  register: Register,
  login: Login,
})

const MainStack = createSwitchNavigator({
  intro: IntroStack,
  main: Tabs  
})

class InstaClone extends Component {
  render() {
    return (
      <MainStack />
    )
  }
}


export default InstaClone