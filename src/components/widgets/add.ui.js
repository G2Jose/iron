import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

import Circle from 'components/widgets/circle.ui';

export default ({ action, width }) => (
  <Circle color="blue" diameter={width} style={styles.circle} color="white">
    <Button style={styles.add} title="+" onPress={action} />
  </Circle>
);

const styles = StyleSheet.create({
  add: {
    alignItems: 'center',
  },
  circle: {
    padding: 10,
  },
});
