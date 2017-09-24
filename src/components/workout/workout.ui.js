import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Set from 'components/set/set.ui';
import Add from 'components/widgets/add.ui';

export default class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numSets: 5, width: 100 };
  }

  getMaxWidth() {
    return this.state.width / (this.state.numSets + 1) - 5 * 2;
  }

  render() {
    const { title } = this.props;
    return (
      <View style={styles.workout}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View
          style={styles.sets}
          onLayout={event => {
            console.log(event.nativeEvent.layout);
            this.setState({ width: event.nativeEvent.layout.width });
          }}
        >
          {[...Array(this.state.numSets).keys()].map(idx => (
            <Set
              key={idx}
              number={idx + 1}
              previous={100}
              width={this.getMaxWidth()}
            />
          ))}
          <Add
            width={this.getMaxWidth()}
            action={() => this.setState({ numSets: this.state.numSets + 1 })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  workout: {
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2.5,
    marginBottom: 2.5,
    paddingBottom: 10,
  },
  sets: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
  },
  titleText: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
