import React from 'react';
import { StyleSheet, Button } from 'react-native';

import Circle from 'components/widgets/circle.ui';

export default ({ action, width }) => (
  <Circle diameter={width} style={styles.circle} color="white">
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
