// screens/StartCallScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const StartCallScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleStartCall = () => {
    if (phoneNumber.trim()) {
      Alert.alert('Panggilan Dimulai', `Memanggil nomor ${phoneNumber}`);
    } else {
      Alert.alert('Kesalahan', 'Nomor telepon tidak boleh kosong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mulai Panggilan</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nomor telepon"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Panggil" onPress={handleStartCall} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default StartCallScreen;
