import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../screens/AuthStack/WelcomeScreen";
import { SignInScreen } from "../screens/AuthStack/SignInScreen";
import { SignUpScreen } from "../screens/AuthStack/SignUpScreen";

const Stack = createStackNavigator();

export const AuthStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
