import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const UserInfoScreen = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  //const [alertMessage, setAlertMessage] = useState('');

  const checkDuplicateId = () => {
    if (userId === 'existingUser') {
      Alert.alert('사용 불가한 아이디입니다.');
      setShowAlert(true);
    } else {
      Alert.alert('사용 가능한 아이디입니다.');
    }
  };

  const handleSignUp = () => {
    if (userId === '') {
      Alert.alert('아이디를 입력해주세요.');
      setShowAlert(true);
    } else if (password === '') {
      Alert.alert('비밀번호를 입력해주세요.');
      setShowAlert(true);
    } else if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>

      {/*
      {showAlert && (
        <View style={styles.alertBox}>
          <Text>{alertMessage}</Text>
          <Button title="확인" onPress={() => setShowAlert(false)} />
        </View>
      )}
      */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>아이디</Text>
        <TextInput
          style={styles.input}
          value={userId}
          onChangeText={setUserId}
        />
        <TouchableOpacity style={styles.duplicateButton} onPress={checkDuplicateId}>
          <Text style={styles.duplicateButtonText}>중복확인</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>비밀번호 확인</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        {passwordError && <Text style={styles.errorText}>비밀번호가 다릅니다.</Text>}
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E6E6FA',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  duplicateButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  duplicateButtonText: {
    color: '#000',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  signUpButton: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  alertBox: {
    position: 'absolute',
    top: '40%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default UserInfoScreen;