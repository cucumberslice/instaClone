import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config';

class Post extends Component {

    constructor() {
        super()
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        }
    }

    likedToggle() {
        this.setState({
            liked: !this.state.liked
        })
    }



    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1)
        const imageSelection = this.props.item % 2 === 0 ? "http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" : "http://cdn.shopify.com/s/files/1/0002/0928/9274/products/product-image-437386085_1200x1200.jpg?v=1521669381";
        const imageUri =  imageSelection+ "=s" + imageHeight + "-c";
        const heartIconolor = this.state.liked ? "rgb(252,62,57)" : null;

        return <View style={{ flexDirection: "column", flex: 1, width: 100 + "%" }}>
            <View style={styles.userBar}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image stylestyle={styles.userPic} source={{ uri: "http://cdn.shopify.com/s/files/1/0002/0928/9274/products/product-image-437386085_1200x1200.jpg?v=1521669381" }} />
                <Text style={{ marginLeft: 10 }}>NeoKun</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>...</Text>
              </View>
            </View>

            {/* my remote pic format from turbo360 storage cannot be rendered at the moment */}
            <TouchableOpacity activeOpacity={0.3} onPress={() => {
                this.likedToggle();
              }}>
              <Image style={{ width: this.state.screenWidth, height: 375 }} source={{ uri: imageUri }} />
            </TouchableOpacity>
            <View style={styles.iconBar}>
              <Image style={[styles.icon, { height: 40, width: 40 }, { tintColor: heartIconolor }]} source={config.images.heartIcon} />
              <Image style={[styles.icon, { height: 40, width: 40 }]} source={config.images.bubbleIcon} />
              <Image resizeMode="stretch" style={[styles.icon, { height: 40, width: 40 }]} source={config.images.arrowIcon} />
            </View>
            <View style={styles.iconBar}>
              <Image style={[styles.icon, { height: 20, width: 20 }]} source={config.images.heartIcon} />
              <Text>126 likes </Text>
            </View>
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
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,33,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginLeft: 5

    }
});

export default Post