import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from './Button.styles';

function Button(props) {
  return(
    <Pressable style={[styles.buttonGood, props.color]}>
        <Text>{props.children}</Text>
      </Pressable>
  )
}

export {Button}