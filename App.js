import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            options={{ headerShown: false }}
            name={"Home"}
            component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}