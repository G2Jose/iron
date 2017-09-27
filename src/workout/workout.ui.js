import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import Set from 'set/set.ui';
import Add from 'common/widgets/add.ui';
import Card from 'common/widgets/card.ui';
import WorkoutTitle from 'workout/workoutTitle.ui';

import { editWorkout } from 'workout/workout.actions';
import { addSet } from 'set/set.actions';

export class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numSets: 0, width: 100 };
  }

  getMaxWidth() {
    return this.state.width / 5 - 5 * 2;
  }

  render() {
    const { title, index } = this.props;
    const workout = this.props.workouts.get(index);
    const sets = this.props.sets.filter(set => set.workout === index);
    return (
      <Card>
        <WorkoutTitle
          title={workout.title}
          onTitleChange={newTitle =>
            this.props.editWorkout({ index, title: newTitle })}
        />
        <View
          style={styles.sets}
          onLayout={event => {
            this.setState({ width: event.nativeEvent.layout.width });
          }}
        >
          {sets.map((setData, i) => (
            <Set key={i} width={this.getMaxWidth()} _id={setData._id} />
          ))}
          <Add
            width={this.getMaxWidth()}
            action={() => this.props.addSet({ workout: index })}
          />
        </View>
      </Card>
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
    paddingTop: 2,
  },
  sets: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 2,
    marginBottom: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleText: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const mapStateToProps = state => ({
  workouts: state.workouts,
  sets: state.sets,
});

const mapDispatchToProps = dispatch => ({
  editWorkout: params => {
    dispatch(editWorkout(params));
  },
  addSet: params => {
    dispatch(addSet(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
