import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Profil = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/gg.jpg')} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Faizatul Munawwaroh</Text>
      <Text style={styles.bio}>
        Semoga mendapat layanan yang terbaik.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profil;
