import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import EditarScreen from "../screens/EditarScreen";
import RegistroScreen from "../screens/RegistroScreen";
import InformacionScreen from "../screens/InformacionScreen";


const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registrar Equipo" component={RegistroScreen} />
      <Tab.Screen name="Editar" component={EditarScreen} />
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Información" component={InformacionScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Navegador() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
