import React from 'react'
import { View,ActivityIndicator,Text } from 'react-native'
import {Styles} from './Styles'

export const Modal = (props) => {
  const {show,text}= props

  if(show===false) return null;
  return (
    <View style={Styles.content}>
      <ActivityIndicator size="large" color="#00a680" />
      {text && <Text style={Styles.text}>{text}</Text>}
    </View>
  )
}
