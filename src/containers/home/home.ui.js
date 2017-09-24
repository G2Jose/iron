import React from 'react';
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';

import Workout from 'components/workout/workout.ui';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <View style={styles.statusBar} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Workout title="Workout 1" />
            <Workout title="Workout 2" />
            <Workout title="Workout 3" />
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
  },
});
