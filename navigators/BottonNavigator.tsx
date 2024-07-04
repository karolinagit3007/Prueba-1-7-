

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import InformacionScreen from "../screens/InformacionScreen";
import EditarScreen from "../screens/EditarScreen";

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName="Welcome"
        screenOptions={{tabBarActiveTintColor:'purple'}}>
            <Tab.Screen name="Welcome" component={WelcomeScreen}/>
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator()

function MyStacks(){
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Información" component={InformacionScreen}/>
            <Stack.Screen name="Editar información" component={EditarScreen}/>
        </Stack.Navigator>
    )
}

export default function NavegadorBottom(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer> 
    )
}