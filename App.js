import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, { Component, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';



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
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Centro de Trabalho:</Text>
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
        
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
 
        
        
    </View>
    
    );
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'center'
  },
});
