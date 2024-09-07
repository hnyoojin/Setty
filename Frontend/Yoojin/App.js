import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import MessageScreen from "./screens/MessageScreen";
import QuestScreen from "./screens/QuestScreen";

const Tab = createBottomTabNavigator();
const { width:SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.navBar}>
      <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Calendar') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Message') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'Quest') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#7030B8',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
            paddingBottom: 25,
            height: 80,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        })}
      >
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              headerStyle: { backgroundColor: '#E5D0FD' },
              headerTintColor: 'black',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 24},
              headerTitleAlign: 'center',
            }}/>
          <Tab.Screen name="Calendar" component={CalendarScreen}
            options={{
              headerStyle: { backgroundColor: '#E5D0FD' },
              headerTintColor: 'black',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 24},
              headerTitleAlign: 'center',
            }}/>
          <Tab.Screen name="Message" component={MessageScreen}
            options={{
              headerStyle: { backgroundColor: '#E5D0FD' },
              headerTintColor: 'black',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 24},
              headerTitleAlign: 'center',
            }}/>
          <Tab.Screen name="Quest" component={QuestScreen}
            options={{
              headerStyle: { backgroundColor: '#E5D0FD' },
              headerTintColor: 'black',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 24},
              headerTitleAlign: 'center',
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
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
