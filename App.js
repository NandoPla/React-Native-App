import { StatusBar } from 'expo-status-bar';
import { Alert, AppRegistry, Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import React, { Component } from 'react';
import styles from './App.styles'

 function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>BEM VINDO AO CONTADOR</Text>
      <Text style={styles.subtitle}></Text>
      <TextInput style={TextInputExample}></TextInput>
    </View>
  );
}

export default class ButtonBasics extends Component {  
  onPressButton() {  
      Alert.alert('You clicked the button!')  
  }  

  render() {  
      return (
        
          <View style={styles.container}>

            <View style={styles.container}>
              <StatusBar style="auto" />
              <Text style={styles.title}>BEM VINDO AO CONTADOR</Text>
              <Text style={styles.subtitle}></Text>
              <TextInput style={TextInputExample}></TextInput>
            </View>
              <View style={styles.buttonContainer}>  
                  <Button  
                      onPress={this.onPressButton}  
                      title="Somar 1"  
                  />  
              </View>  
              <View style={styles.buttonContainer}>  
                  <Button  
                      onPress={this.onPressButton}  
                      title="Subtrair 1"  
                      color="red"  
                  />  
              </View>  
              <View style={styles.multiButtonContainer}>  
                  <Button  
                      onPress={this.onPressButton}  
                      title="Reset"  
                      color="green"  
                  />  
              </View>  
          </View>  
      );  
  }  
}  



//input text
const TextInputExample = () => {
  const [text, onChangeText] = React.useState();
  return (
    <View>
      <TextInput
        style={styles.inputText}
        onChangeText={onChangeText}
      />
      <TextInput
        style={styles.inputText}
        onChangeText={onChangeNumber}        
      />
    </View>
  );
};

