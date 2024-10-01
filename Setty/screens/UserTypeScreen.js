import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserTypeScreen = ({ navigation }) => {
  const handleMenteeSelect = () => {
    navigation.navigate('UserInfo');
  };

  const handleMentorSelect = () => {
    navigation.navigate('UserInfo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>당신은{'\n'}한국 생활에{'\n'}대하여...</Text>
      <View style={styles.divider} />
      <Button title="도움을 받고 싶어요" onPress={handleMenteeSelect} />
      <Button title="도움을 주고 싶어요" onPress={handleMentorSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
  },
  divider: {
    height: 2,
    backgroundColor: '#000',
    width: '80%',
    marginVertical: 20,
  },
});

export default UserTypeScreen;
