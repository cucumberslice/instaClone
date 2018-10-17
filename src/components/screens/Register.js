import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Button } from 'react-native'

class Register extends Component {

    constructor() {
        super();
        this.state = {
            crendentials: {
                login: '',
                password: ''
            }
        }

    }

    updateText(text,field) {
        let newCredentials = Object.assign(this.state.crendentials);
        newCredentials[field] = text;
        this.setState({
            crendentials: newCredentials
        })
    }

    register() {
        //navigate to the main app
        //send credentials to server
        //if 
        alert(JSON.stringify(this.state.crendentials))
        // this.props.navigation.navigate('main')

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
           
                <TextInput 
                value={this.state.login}
                autoCorrect={false}
                placeholder="Username" style={styles.input} onChange={text => this.updateText(text, 'login')}/> 
                <TextInput 
                value={this.state.password}
                autoCorrect={false}
                onChange={text=>this.updateText(text, 'password')} secureTextEntry  placeholder="Password"style={styles.input}/>
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