import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FacturacionStack} from './FacturacionStack'
import { AccountSatck } from './AccountSatck';
import {screen} from '../utils/ScreenName'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                options={{
                  tabBarLabel: 'Facturacion',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="file-document-multiple-outline" color={color} size={size} />
                  ),
                }}/>
            <Tab.Screen 
                name={screen.AccountStack.tab}
                component={AccountSatck}
                options={{
                  tabBarLabel: 'Cuenta',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ),
                }}/>

        </Tab.Navigator>
    </NavigationContainer>
  )
}
