import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Set from 'components/set/set.ui';
import Add from 'components/widgets/add.ui';

export default class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numSets: 5 };
  }
  render() {
    const { title } = this.props;
    return (
      <View style={styles.workout}>
        <Text style={styles.title}>{title}</Text>
        {[...Array(this.state.numSets).keys()].map(idx => (
          <Set key={idx} number={idx + 1} previous={100} />
        ))}
        <Add
          action={() => {
            this.setState({ numSets: this.state.numSets + 1 });
            console.log(this.state);
          }}
        />
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
  title: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
