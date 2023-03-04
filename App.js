import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import pla, {title, subtitle} from './App.styles'

export default function App() {
  return (
    <View style={pla.container}>
      <Text style={title}>Esse é o título principal</Text>
      <Text style={subtitle}>novo texto</Text>
      <StatusBar style="light" />
      <TextInput></TextInput>
    </View>
  );
}
