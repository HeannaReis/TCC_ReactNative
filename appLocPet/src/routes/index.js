import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Maps from '../pages/Maps'
import Sighted from '../pages/Sighted';
import Search from '../pages/Search/Search';
import Settings from '../pages/Settings/Settings';

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>

            <Tab.Screen name="Avistados" component={Sighted} />

            <Tab.Screen name="Search" component={Search} />

            <Tab.Screen name="Maps" component={Maps} />            

            <Tab.Screen name="Opções" component={Settings} />

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