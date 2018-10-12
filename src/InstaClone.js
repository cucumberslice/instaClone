import React, { Component } from 'react'
import { 
    View, 
    Text, 
    
} from 'react-native'
import {SwitchNavigator, TabNavigator} from 'react-navigation'
import {MainFeed, Login, Camera, Profile} from './components/screens'
const Tabs = TabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
})

const MainStack = SwitchNavigator({
  login: Login,
  main: Tabs,
})

class InstaClone extends Component {
  render() {
    return (
      <MainStack />
    )
  }
}


export default InstaClone