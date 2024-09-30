import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
// import SignUpScreen from './screens/SignUpScreen';
import UserTypeScreen from './screens/UserTypeScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import CalendarScreen from "./screens/CalendarScreen";
import MessageScreen from "./screens/MessageScreen";
import QuestScreen from "./screens/QuestScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
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
      <Tab.Screen name="Home" component={HomeScreen} options={tabScreenOptions} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={tabScreenOptions} />
      <Tab.Screen name="Message" component={MessageScreen} options={tabScreenOptions} />
      <Tab.Screen name="Quest" component={QuestScreen} options={tabScreenOptions} />
    </Tab.Navigator>
  );
};

const tabScreenOptions = {
  headerStyle: { backgroundColor: '#E5D0FD' },
  headerTintColor: 'black',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
  headerTitleAlign: 'center',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="회원가입" component={SignUpScreen} /> */}
        <Stack.Screen name="회원유형선택" component={UserTypeScreen} />
        <Stack.Screen name="회원정보 기입 창" component={UserInfoScreen} />
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
