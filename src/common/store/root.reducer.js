import { combineReducers } from 'redux';

import workouts from 'workout/workout.reducer';
import sets from 'set/set.reducer';

export default combineReducers({ workouts, sets });
