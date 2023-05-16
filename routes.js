import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/pages/Home/";
import { Questions } from "./src/pages/Questions";

const Stack = createNativeStackNavigator();

export function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Questions" component={Questions}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
