import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FacturacionStack} from './FacturacionStack'
import { AccountSatck } from './AccountSatck';
import {screen} from '../utils/ScreenName'
export const AppNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator
              screenOptions={({ route }) => ({
              tabBarActiveTintColor: "#4DAE18",
              tabBarInactiveTintColor: "#646464",
              headerShown: false,
            })}
        >
            <Tab.Screen
                name={screen.FacturacionStack.tab}
                component={FacturacionStack}
                options={{title:"Facturacion"}}
            />
            <Tab.Screen 
                name={screen.AccountStack.tab}
                component={AccountSatck}
                options={{title:"Cuenta"}}
            />

        </Tab.Navigator>
    </NavigationContainer>
  )
}
