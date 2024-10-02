import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const MonthlyScreen = ({ navigation }) => {
  const [schedules, setSchedules] = useState([
    { id: 1, date: '10월 1일', event: '국군의 날' },
    { id: 2, date: '10월 3일', event: '개천절' },
  ]);

  const addSchedule = () => {
    navigation.navigate('ScheduleInput');
  };

  const deleteSchedule = (schedule) => {
    Alert.alert(
      `${schedule.event}을(를) 삭제하시겠습니까?`,
      '',
      [
        { text: '아니오', onPress: () => {} },
        {
          text: '예',
          onPress: () => {
            setSchedules(schedules.filter((item) => item.id !== schedule.id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {schedules.map((schedule) => (
          <TouchableOpacity key={schedule.id} onPress={() => deleteSchedule(schedule)}>
            <Text>{`${schedule.date}: ${schedule.event}`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={addSchedule}>
        <Text>일정 추가</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#D3BCE3',
    padding: 15,
    borderRadius: 10,
  },
});

export default MonthlyScreen;
