import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import styles from './App.styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esse é o título principal</Text>
      <Text style={styles.subtitle}>novo texto</Text>
      <StatusBar style="light" />
      <TextInput style={TextInputExample}></TextInput>
    </View>
  );
}

const TextInputExample = () => {
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState();

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