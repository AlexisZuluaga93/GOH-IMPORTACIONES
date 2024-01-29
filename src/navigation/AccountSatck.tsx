import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome ,Login,Usuario} from '../screens';



const stack= createNativeStackNavigator();
export const AccountSatck = () => {
    
  return (
    <stack.Navigator>
        <stack.Screen
            name='Welcome'
            component={Welcome}
            options={{title:null}}
        />
        <stack.Screen
            name='Login'
            component={Login}
            options={{title:"Inicio"}}
        />
        <stack.Screen
            name='Usuario'
            component={Usuario}
            options={{title:"REGISTRO"}}
        />
    </stack.Navigator>
  )
}
