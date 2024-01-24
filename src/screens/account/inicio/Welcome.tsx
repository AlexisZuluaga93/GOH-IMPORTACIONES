import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import {  Image, Button } from 'react-native-elements'
import {styles} from './Styles'
import {WelcomeViewModel} from './ViewModel'
export const Welcome = () => {
const {buttonPressed} = WelcomeViewModel()
  return (
    <View style={styles.content}>
        <TouchableOpacity onPress={buttonPressed}>
        <Image 
            source={require('../../../../assets/img/welcome.png')}
            style={styles.image} 
        />
        </TouchableOpacity>
        
    </View>    

       

  )
}
