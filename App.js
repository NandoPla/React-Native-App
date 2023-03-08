import { StatusBar } from 'expo-status-bar';
import { Alert, AppRegistry, Pressable, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import styles from './App.styles';
import { useState } from 'react';
import { Button } from './components/Button';

export default function App() {

  const [valor, setValor] = useState(0);

  function handlePress(id){
    if(id === 'buttomSum'){
      setValor(num => num + 1);
    } else if(id === 'buttomSubtraction'){
      setValor(num => num - 1)
    } else if(id === 'buttomReset') {
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

      <Button handlePress={handlePress('buttomSum')} color={{backgroundColor:"green"}}>Somar</Button>
      <Button handlePress={handlePress('buttomSubtraction')} color={{backgroundColor:"red"}}>Subtrair</Button>
      <Button handlePress={handlePress('buttomReset')} color={{backgroundColor:"yellow"}}>Reset</Button>
    </View>
  );
}