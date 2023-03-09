import { StatusBar } from 'expo-status-bar';
import { Alert, AppRegistry, Pressable, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import styles from './App.styles';
import displayStyles from './components/Display/Display.styles'
import { useState } from 'react';
import { Button } from './components/Button';
import { useFonts } from 'expo-font';

/*com parametro, passa arrow function, exemplo na linha 38*/
export default function App() {
  const [fontsLoaded] = useFonts({
    'LEMONMILK-Bold': require('./assets/fonts/LEMONMILK-Bold.otf'),
  });

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
      <StatusBar style="auto"/>
      <Text style={[styles.title, {fontFamily:'LEMONMILK-Bold'}]}>CONTADOR</Text>
      <Text style={[displayStyles.displayValue, {fontFamily:'LEMONMILK-Bold'}]}>
        {valor}
      </Text>
      <Button style={{fontFamily:'LEMONMILK-Bold'}} handlePress={handleSum} color={{backgroundColor:"green"}}>Somar</Button>
      <Button handlePress={handleSubt} color={{backgroundColor:"red"}}>Subtrair</Button>
      <Button handlePress={() => handlePress('buttomReset')} color={{backgroundColor:"blue"}}>Reiniciar</Button>
    </View>
  );
}