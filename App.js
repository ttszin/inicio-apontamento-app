import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, { Component, useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {db} from './firebase.js';
import styleExterno from '';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from "./src/routes.js";

const Stack = createNativeStackNavigator()

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('Texto Descritivo');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <TextInput
        editable
        multiline
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{borderWidth:1,width:200,height:50, marginTop:10,textAlign:'center'}}
      />
      <Text>{value}</Text>
    </View>
  );
};



export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      centrotrab: 'mecabng',
      textodescritivo: ''
    }
  }
  
  

  render() {
    console.disableYellowBox = true;
    const[ fontsLoaded ] = useFonts({
      
    });
    if(!fontsLoaded){
      <AppLoading/>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Centro de Trabalho:</Text>
        <Picker
          style={styles.picker} itemStyle={styles.pickerItem}
          selectedValue={this.state.centrotrab}
          onValueChange={(itemValue) => this.setState({centrotrab: itemValue})}
        >
          <Picker.Item label="ELETBNG" value="eletbng" />
          <Picker.Item label="PRMEBNG" value="prmebng" />
          <Picker.Item label="INSTBNG" value="instbng" />
          <Picker.Item label="MECABNG" value="mecabng" />
        </Picker>
        <MultilineTextInputExample/>
 
        
        
    </View>
    
    );
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999999',
    alignItems: 'center',
    
  },
  pickerItem: {
    color: 'red'
  },
  picker: {
    width: 200,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
    
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white'
  },
 
  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
    marginTop:100
  },
});
