import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AdkarScreen from "./screens/AdkarScreen";
import { View, I18nManager } from "react-native";
import tw from "twrnc";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

I18nManager.forceRTL(true);

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="adkar">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "الصفحة الرئيسية" }}
      />
      <Tab.Screen
        name="adkar"
        component={HomeStackScreen}
        options={{ title: "الأذكار" }}
      />
      <Tab.Screen
        name="myAdkar"
        component={HomeStackScreen}
        options={{ title: "المفضلة" }}
        //options={({ route }) => ({ title: route.params.title })}
      />
      <Tab.Screen
        name="contact"
        component={HomeStackScreen}
        options={{ title: "نحن" }}
      />
    </Tab.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="adkar"
      headerBackButtonMenuEnabled={false}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="adkar"
        component={AdkarScreen}
        options={{ title: "أذكار المسلم" }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <View style={tw`bg-black flex-1`}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>
  );
}

export default App;
