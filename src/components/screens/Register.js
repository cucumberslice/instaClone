import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Button } from 'react-native'

class Register extends Component {

    login() {
        //navigate to the main app
        //send credentials to server
        //if 
        this.props.navigation.navigate('main')

    }
    render() {
        return (

            <View
                style={{
                    height: 100 + '%',
                    width: 100 + '%',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                
            >
                <Text>REGISTER PAGE</Text>
           
                <TextInput placeholder="Username"style={styles.input} /> 
                <TextInput placeholder="Password"style={styles.input}/>
            <Button onPress={()=> {
                this.register()

            }}title="Signup"/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    input: {

        height: 50,
        width: 100 + '%',
        marginHorizontal: 50,
        backgroundColor: "rgb(255,255,255)",
        marginBottom: 10
    }
})

export default Register;