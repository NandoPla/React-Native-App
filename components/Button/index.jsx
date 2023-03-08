import React from 'react'
import { Pressable, Text, TouchableOpacity } from 'react-native'
import styles from './Button.styles';

function Button(props) {
  return(
    <TouchableOpacity id={[props.buttomSum, props.buttomSubtraction, props.buttomReset]} onPress={props.handlePress} activeOpacity={0.6} style={[styles.buttonGood, props.color]}>
        <Text style={styles.fontSizeText}>{props.children}</Text>
      </TouchableOpacity>
  )
}

export {Button}