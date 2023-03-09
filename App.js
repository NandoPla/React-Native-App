import { StatusBar } from 'expo-status-bar';
import { Alert, AppRegistry, Pressable, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import styles from './App.styles';
import { useState } from 'react';
import { Button } from './components/Button';

/*com parametro, passa arrow function*/
export default function App() {

  const [valor, setValor] = useState(0);

  function handleSum(){
    setValor(num => num + 1)
  }

  function handleSubt(){
    setValor(num => num - 1)
  }


  function handlePress(id){
    if(id === 'buttomReset') {
      setValor(num => 0)
    }
  }

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>BEM VINDO AO CONTADOR</Text>
      <Text style={{color: "white"}}>
        {valor}
      </Text>
      <Button handlePress={handleSum} color={{backgroundColor:"green"}}>Somar</Button>
      <Button handlePress={handleSubt} color={{backgroundColor:"red"}}>Subtrair</Button>
      <Button handlePress={() => handlePress('buttomReset')} color={{backgroundColor:"blue"}}>Reset</Button>
    </View>
  );
}