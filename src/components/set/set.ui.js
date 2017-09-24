import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default ({ number, previous }) => (
  <View style={styles.set}>
    <View style={styles.number}>
      <Text style={styles.numberText}>{`${number}.`}</Text>
    </View>
    <View style={styles.previous}>
      <Text>{previous}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  set: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2.5,
    marginBottom: 2.5,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 10,
  },
  number: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  numberText: {
    fontWeight: 'bold',
  },
  previous: {
    flex: 2,
    alignItems: 'center',
  },
});
