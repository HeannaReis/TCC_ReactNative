import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Signin from '../pages/Signin'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen 
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }}
        />

        <Stack.Screen 
        name='Signin'
        component={Signin}
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
)
}