import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Circle from 'common/widgets/circle.ui';
import Weight from 'set/weight.ui';

export default class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numReps: 0, weight: 0 };
  }

  render() {
    return (
      <View style={styles.set}>
        <Circle color="blue" diameter={this.props.width}>
          <Text style={styles.numReps}>{this.state.numReps}</Text>
        </Circle>
        <Weight text={`${this.state.weight} kg`} width={this.props.width} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numReps: {
    color: 'white',
  },
  set: {
    alignItems: 'center',
  },
});
