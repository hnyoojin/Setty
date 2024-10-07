import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen    from './screens/LoginScreen';
import HomeScreen     from './screens/HomeScreen';
import UserTypeScreen from './screens/UserTypeScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import CalendarScreen from "./screens/CalendarScreen";
import MessageScreen  from "./screens/MessageScreen";
import QuestScreen    from "./screens/QuestScreen";
import MonthlyScreen  from './screens/MonthlyScreen';
import ScheduleInput  from './screens/ScheduleInput'; // 상대 경로 수정

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      
      initialRouteName="Home"

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let iconName;

          if (route.name === 'Home')
            iconName = focused ? 'home' : 'home-outline';
          if (route.name === 'Calendar')
            iconName = focused ? 'calendar' : 'calendar-outline';
          if (route.name === 'Message')
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
          if (route.name === 'Quest')
            iconName = focused ? 'person' : 'person-outline';

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
      <Tab.Screen name="Home"     component={HomeScreen}      options={tabScreenOptions} />
      <Tab.Screen name="Calendar" component={CalendarScreen}  options={tabScreenOptions} />
      <Tab.Screen name="Message"  component={MessageScreen}   options={tabScreenOptions} />
      <Tab.Screen name="Quest"    component={QuestScreen}     options={tabScreenOptions} />
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
        <Stack.Screen name="Login"    component={LoginScreen}     options={tabScreenOptions} />
        <Stack.Screen name="UserType" component={UserTypeScreen}  options={tabScreenOptions} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen}  options={tabScreenOptions} />
        <Stack.Screen name="Home"     component={TabNavigator}    options={{ headerShown: false }} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen}  options={{ title: '캘린더' }} />
        <Stack.Screen name="MonthlyScreen"  component={MonthlyScreen}   options={{ title: '일정 관리' }} />
        <Stack.Screen name="ScheduleInput"  component={ScheduleInput}   options={{ title: '일정 추가' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
