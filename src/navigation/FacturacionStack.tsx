import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Catalogo } from '../screens';

const stack =createNativeStackNavigator();
export const FacturacionStack = () => {
  return (
    <stack.Navigator>
        <stack.Screen
            name="Catalogo"
            component={Catalogo}
            options={{title:"Catalogo"}}
        />
    </stack.Navigator>
  )
}
