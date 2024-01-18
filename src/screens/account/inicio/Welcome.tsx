import React from 'react'
import { View,Text } from 'react-native'
import {  Image, Button } from 'react-native-elements'
import {styles} from './Styles'
import {WelcomeViewModel} from './ViewModel'
export const Welcome = () => {
const {buttonPressed} = WelcomeViewModel()
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        BIENVENIDO
      </Text>
        <Image 
            source={require('../../../../assets/img/welcome.png')}
            style={styles.image}
            
        />
        <View style={styles.button}>
           <Button title='INICIAR SESION' onPress={buttonPressed}  />
        </View>
        
    </View>
  )
}
