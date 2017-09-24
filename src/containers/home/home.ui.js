import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Workout from 'components/workout/workout.ui';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxSets: 5,
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Workout title="Workout 1" maxSets={this.state.maxSets} />
          <Workout title="Workout 2" maxSets={this.state.maxSets} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
});
