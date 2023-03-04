import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esse é o título principal</Text>
      <StatusBar style="light" />
      <TextInput></TextInput>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#fff"
  }
});
