import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../assets/images/gg.jpg')} 
        style={styles.logo} 
      />
      <Text style={styles.title}>Call Center</Text>
      <Text style={styles.description}>
        Aplikasi call canter adalah perangkat lunak yang membantu tim costomer support untuk meningkatkan pengalaman pelanggan.Hal ini membantu bisnis untuk mempersonalisasi panggilan sehingga pelanggan merasa puas.
      </Text>
      <Text style={styles.description}>
        
      </Text>
      <Text style={styles.subtitle}>Contact Us</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com/android?lang=id_ID')}>
        <Text style={styles.link}>Unduh WhatsAp untuk Android</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com/android?lang=id_ID')}>
        <Text style={styles.link}>Unduh WhatsAp untuk Android</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF8DC',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#FF7F50',
    marginBottom: 10,
  },
});

export default AboutScreen;
