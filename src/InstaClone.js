import React, { Component } from 'react'
import { 
    View, 
    Text, 
    
} from 'react-native'
import {SwitchNavigator, TabNavigator} from 'react-navigation'
import {MainFeed, Login} from './components/screens'

const MainStack = SwitchNavigator({
  login: Login,
  main: MainFeed,
})

class InstaClone extends Component {
  render() {
    return (
      <MainStack />
    )
  }
}


export default InstaClone