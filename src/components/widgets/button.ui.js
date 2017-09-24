import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default ({ action, text }) => (
  <Button style={styles.button} title={text} onPress={action} />
);

const styles = StyleSheet.create({
  button: {},
});
