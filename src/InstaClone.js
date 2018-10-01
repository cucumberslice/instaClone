import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

class InstaClone extends Component {

    constructor() {
        super() 
        this.state ={ 
            screenWidth: Dimensions.get("window").width }
    }

    


    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1)
        const imageUri = "https://lh3.googleusercontent.com/yrYFTBh_KMfU54Le5ltfw4b4-FQ8MbFM3RZb_1jgsfJ2NAysXalvH4KKZHxuLPpbHY0CrC5Q4AIt5dqztIflCo8LaQ" + 
        "=s" + imageHeight + "-c"
        
        
        return <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
            <View style={styles.tempNav}>
              <Text>Instagram</Text>
            </View>
            <View style={styles.userBar}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image stylestyle={styles.userPic} source={{ uri: "https://lh3.googleusercontent.com/I1YGthSMfOEpCB6VqtGEWzTAmrybMs3RJaJQuWdv23ReWKDYpLnM_9PR8E7pfGgrlcjwYm2WcvpSSH_2dDOSnIe0Kg" }} />
                <Text style={{ marginLeft: 10 }}>NeoKun</Text>
              </View>
              <View style={{alignItems: "center"}} >
                  <Text style={{ fontSize: 30}}>...</Text>
              </View>
            </View>

            {/* my remote pic format from turbo360 storage cannot be rendered at the moment */}

            <Image 
                style={{ width: this.state.screenWidth, height: 375 
                }}
                source={{ 
                    uri: imageUri 
                }} 
                />
          </View>;
                        }

         
            
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 56,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,33,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"

  },

  userBar: {
      width: 100 + "%",
      height: 50,
      backgroundColor: "rgb(255,255,255)",
      flexDirection: "row",
      paddingHorizontal: 10,
      justifyContent: "space-between"  },

  userPic: {
      height: 40,
      width: 40,
      borderRadius: 20
  }
});

export default InstaClone