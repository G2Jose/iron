import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';

import Workout from 'workout/workout.ui';
import AddWorkout from 'workout/addWorkout.ui';
import { addWorkout } from 'workout/workout.actions';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Workouts =
      this.props.workouts &&
      this.props.workouts.map((workout, i) => (
        <Workout title={`Workout ${i}`} key={i} index={i} />
      ));
    return (
      <View>
        <View style={styles.statusBar} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {Workouts}
            <AddWorkout
              action={() => this.props.addWorkout({ title: 'Unnamed workout' })}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'black',
  },
  scrollView: {
    height: Dimensions.get('window').height - 20,
    backgroundColor: '#F3F3F3',
    paddingTop: 2,
  },
});

const mapStateToProps = state => ({
  workouts: state.workouts,
});

const mapDispatchToProps = dispatch => ({
  addWorkout: (params) => {
    dispatch(addWorkout(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
