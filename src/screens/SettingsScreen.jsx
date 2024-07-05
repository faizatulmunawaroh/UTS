// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Notifikasi</Text>
        <Switch
          onValueChange={toggleNotifications}
          value={isNotificationsEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Mode Gelap</Text>
        <Switch
          onValueChange={toggleDarkMode}
          value={isDarkModeEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
