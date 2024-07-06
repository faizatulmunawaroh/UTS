// screens/CallHistoryScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, ToastAndroid } from 'react-native';

const callHistory = [
  { id: '1', name: 'Riyan', time: '2024-01-23 10:00' },
  { id: '2', name: 'Deva', time: '2024-04-12 12:30' },
  { id: '3', name: 'Afriyani', time: '2024-06-09 14:45' },
];

const CallHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={callHistory}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 1,
  },
  name: {
    fontSize: 18,
  },
  time: {
    fontSize: 14,
    color: '#777777',
  },
});

export default CallHistoryScreen;
