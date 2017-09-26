import { createAction } from 'redux-actions';

export const addWorkout = createAction('ADD_WORKOUT');
export const removeWorkout = createAction({
  REMOVE_WORKOUT: i => ({ workout: i }),
});
export const editWorkout = createAction('EDIT_WORKOUT');
