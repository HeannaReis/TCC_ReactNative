import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Maps from '../pages/Maps'

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>

            <Tab.Screen name="Home" component={Home} />

            <Tab.Screen name="Login" component={SignIn} />

            <Tab.Screen name="Cadastro" component={Register} />

            <Tab.Screen name="Mapas" component={Maps} />

        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}