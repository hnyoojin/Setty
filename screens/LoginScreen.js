import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (userEmail === '') {
      Alert.alert('이메일를 입력해주세요.');
    } else if (password === '') {
      Alert.alert('비밀번호를 입력해주세요.');
    } else if (userEmail !== 'testUser' || password !== '1234') {
      Alert.alert('이메일 또는 비밀번호가 틀렸습니다.');
    } else {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={userEmail}
        onChangeText={setUserEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="로그인" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('회원유형선택')}>
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
