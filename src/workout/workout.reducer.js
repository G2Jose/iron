import { handleActions } from 'redux-actions';

import { addWorkout, removeWorkout } from 'workout/workout.reducer';
import { workout, workouts as defaultState } from 'workout/workout.models';

export default handleActions(
  {
    [addWorkout](state, action) {
      const newWorkout = workout(action.payload.workout);
      return { counter: state.push(newWorkout) };
    },
  },
  defaultState
);
