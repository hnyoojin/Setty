import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';


import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import QuestScreen from "./screens/QuestScreen";
import MessageScreen from "./screens/MessageScreen";

const Tab = createBottomTabNavigator();
const { width:SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.navBar}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Calendar" component={CalendarScreen}/>
          <Tab.Screen name="Message" component={MessageScreen}/>
          <Tab.Screen name="Quest" component={QuestScreen}/>
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style="dark"/>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    width: SCREEN_WIDTH,
    flex: 1,
    marginTop: 50,
  },
})
