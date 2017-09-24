import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default ({ action }) => (
  <Button style={styles.add} title="+ Add" onPress={action} />
);

const styles = StyleSheet.create({
  add: {
    alignItems: 'center',
  },
});
