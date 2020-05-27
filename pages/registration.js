import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import logo from '../assets/logo.png';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        fname: '',
        lname: '',
        phone: '',
    }
  }

  onClickListener = (viewId) => {
    //alert("Fname "+this.state.fname);
    console.log("fname"+this.state.fname);
    Alert.alert("Alert", "Button pressed.. "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="First Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(fname) => this.setState({fname})}/>
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Last Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(lname) => this.setState({lname})}/>
        </View>
        

        <View style={styles.inputContainer}>
         
          <TextInput style={styles.inputs}
              placeholder="Phone"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(phone) => this.setState({phone})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('register')}>
                <Text style={styles.regstyle}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer}  onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#051E34',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:0,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#F96302",
  },
  loginText: {
    color: 'white',
  },
  regstyle: {
      color: '#FFFFFF',
  }
});
 