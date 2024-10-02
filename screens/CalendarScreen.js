import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function CalendarScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>일정</Text>

      <TouchableOpacity
        style={styles.scheduleBox}
        onPress={() => navigation.navigate('MonthlyScreen')}
      >
        <Text>일별 일정</Text>
      </TouchableOpacity>

      <View style={styles.todoBox}>
        <Text>투두리스트</Text>
        {/* 투두리스트 기능을 여기에 추가할 예정 */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3BCE3', // 연보라색 배경
    padding: 20,
  },
  header: {
    fontSize: 13,
    color: 'black',
    marginBottom: 20,
  },
  scheduleBox: {
    flex: 0.65,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  todoBox: {
    flex: 0.35,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  screen: {
    flex: 1,
    backgroundColor: '#E5D0FD',
    alignItems: 'left',
  },
  button: {
    backgroundColor: '#7030B8',
    fontSize: 600,
  }
});
