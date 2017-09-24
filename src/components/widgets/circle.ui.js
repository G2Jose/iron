import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default ({ diameter, color, children }) => (
  <View style={styles({ diameter, color }).set}>{children}</View>
);

const styles = ({ diameter, color }) =>
  StyleSheet.create({
    set: {
      width: diameter,
      height: diameter,
      borderRadius: diameter / 2,
      backgroundColor: color,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
