import React from 'react'
import {View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {screen} from '../../../utils/ScreenName'
export const  WelcomeViewModel = () => {
  const navigation = useNavigation();

  const buttonPressed = ()=>{
   navigation.navigate(screen.AccountStack.login as never)
  }
  return {
    buttonPressed
  }
    
}
