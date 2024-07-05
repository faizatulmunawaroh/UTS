// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Layanan Panggilan</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('StartCall')}
      >
        <Icon name="call" size={30} color="#fff" />
        <Text style={styles.buttonText}>Mulai Panggilan</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('CallHistory')}
      >
        <Icon name="time" size={30} color="#fff" />
        <Text style={styles.buttonText}>Riwayat Panggilan</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Settings')}
      >
        <Icon name="settings" size={30} color="#fff" />
        <Text style={styles.buttonText}>Pengaturan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Home;
