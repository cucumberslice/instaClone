import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class InstaClone extends Component {

    render() {
        return <View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}} >
         
            {/* my remote pic format cannot be rendered at the moment */}
            {/* <Image style={{ width: 100, height: 100 }} source={{ uri: "https://lh3.googleusercontent.com/yrYFTBh_KMfU54Le5ltfw4b4-FQ8MbFM3RZb_1jgsfJ2NAysXalvH4KKZHxuLPpbHY0CrC5Q4AIt5dqztIflCo8LaQ" }} /> */}
            
            {/* <View style={{ width: 100 + "%", height: 50}}/> */}

   
            
            <Image 
            source={{ 
                uri: "https://www.petful.com/wp-content/uploads/2013/12/ear-mites-in-cats.png" }} 
            style={{ width: 100+ "%", height: 50+ "%"}}/>
          </View>;
    }
}

export default InstaClone