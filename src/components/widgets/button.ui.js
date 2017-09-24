import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default ({ action, text }) => (
  <Button style={styles.button} title={text} onPress={action} />
);

const styles = StyleSheet.create({
  button: {},
});
