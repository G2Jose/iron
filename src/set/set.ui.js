import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Circle from 'common/widgets/circle.ui';
import Weight from 'set/weight.ui';
import { editSet as editSetAction } from 'set/set.actions';

class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numReps: 0, weight: 0 };
  }

  render() {
    const { _id, editSet, width, sets } = this.props;
    const set = sets.filter(_set => _set._id === _id).get(0);
    return (
      <View style={styles.set}>
        <TouchableOpacity
          onPress={() => editSet({ _id, numReps: set.get('numReps') + 1 })}
        >
          <Circle color="blue" diameter={width}>
            <Text style={styles.numReps}>{set.get('numReps')}</Text>
          </Circle>
        </TouchableOpacity>
        <Weight
          weight={set.weight}
          width={width}
          onWeightUpdate={newWeight =>
            editSet({ _id, weight: Number(newWeight) })}
        />
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
    paddingBottom: 10,
  },
});

const mapStateToProps = state => ({
  sets: state.sets,
});

const mapDispatchToProps = dispatch => ({
  editSet: (params) => {
    dispatch(editSetAction(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Set);
