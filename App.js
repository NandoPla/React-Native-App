import { StatusBar } from 'expo-status-bar';
import { Alert, AppRegistry, Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import styles from './App.styles';
import { useState } from 'react';
import { Button } from './components/Button';

export default function App() {

  let [valorInicial, mudaValor] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>BEM VINDO AO CONTADOR</Text>
      <Text style={styles.subtitle}></Text>
      <TextInput style={TextInputExample}></TextInput>

      <Button color={{backgroundColor:"green"}}>Somar</Button>
      <Button color={{backgroundColor:"red"}}>Subtrair</Button>
      <Button color={{backgroundColor:"yellow"}}>Reset</Button>
    </View>
  );
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

