import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ScheduleInput = ({ navigation }) => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const saveSchedule = () => {
    // 일정 저장 로직
    navigation.navigate('MonthlyScreen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="일정의 이름"
        style={styles.input}
        value={eventName}
        onChangeText={setEventName}
      />
      <TextInput
        placeholder="날짜 (예: 2024-10-01)"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="시각 (예: 14:00)"
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />
      <View style={styles.buttonContainer}>
        <Button title="취소" onPress={() => navigation.goBack()} />
        <Button title="저장" onPress={saveSchedule} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ScheduleInput;
