import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class InstaClone extends Component {

    render() {
        return <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
            <View style={styles.tempNav}>
                <Text>Instagram</Text>
            </View> 
            <View style={styles.userBar}/>

            <View style={{flexDirection: "row"}}>
               
                <Image 
                    style={{ width: 40, height: 40}}
                    source={{
                        uri: "https://www.google.com/search?q=funny+profile+pictures&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjSzsijkubdAhUmh-AKHYQtBu4Q_AUIDigB&biw=1920&bih=1001#imgrc=OggVpVKrYYsdjM:"
            }}
            />
            <Text>NeoKun</Text>
            </View>
            <View>

            </View>

            {/* my remote pic format from turbo360 storage cannot be rendered at the moment */}
            
            <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                style={{ width: 100 + "%", height: 100 }} />

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
      flexDirection: "row"

  }
});

export default InstaClone