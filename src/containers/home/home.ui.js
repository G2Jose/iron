import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Workout from 'components/workout/workout.ui';

export default () => {
  console.log(Set);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Workout title="Workout 1" />
        <Workout title="Workout 2" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
});
