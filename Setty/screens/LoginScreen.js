import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (userId === '') {
      Alert.alert('아이디를 입력해주세요.');
    } else if (password === '') {
      Alert.alert('비밀번호를 입력해주세요.');
    } else if (userId !== 'testUser' || password !== '1234') {
      Alert.alert('아이디 또는 비밀번호가 틀렸습니다.');
    } else {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="로그인" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('UserType')}>
        <Text style={styles.signUpText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#E6E6FA',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  signUpText: {
    color: 'orange',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
