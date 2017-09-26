import { handleActions } from 'redux-actions';

import { addWorkout, editWorkout } from 'workout/workout.actions';
import { WorkoutModel, workouts as defaultState } from 'workout/workout.models';

export default handleActions(
  {
    [addWorkout().type](state, action) {
      const newWorkout = new WorkoutModel(action.payload);
      return state.push(newWorkout);
    },
    [editWorkout().type](state, action) {
      const { index, ...rest } = action.payload;
      const oldWorkout = state.get(index);
      const newWorkout = oldWorkout.merge(rest);
      return state.set(index, newWorkout);
    },
  },
  defaultState
);
