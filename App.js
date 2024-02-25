import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/DetailsScreen"
import WelcomeScreen from "./screens/WelcomeScreen"
import AdkarScreen from "./screens/AdkarScreen"
import { View, I18nManager } from "react-native"
import tw from "twrnc"


const Stack = createNativeStackNavigator();
I18nManager.forceRTL(true);

function App() {
  return (
    <View style={tw`bg-black flex-1`}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="adkar">
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} 
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen name="adkar" component={AdkarScreen}
          options={{ title: 'أذكار المسلم' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

export default App;