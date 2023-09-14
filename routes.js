import { React } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EstablishmentsProvider from './src/contexts/establishments'

import { Home } from './src/pages/Home/'
import { Questionary } from './src/pages/Questionary'
import { Itinerary } from './src/pages/Itinerary'

const Stack = createNativeStackNavigator()

export function Navigation() {
  return (
    <NavigationContainer>
      <EstablishmentsProvider>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Questions' component={Questionary} />
          <Stack.Screen name='Itinerary' component={Itinerary} />
        </Stack.Navigator>
      </EstablishmentsProvider>
    </NavigationContainer>
  )
}
