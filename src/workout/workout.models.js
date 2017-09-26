import Immutable from 'immutable';
import Model from 'common/store/model';

export const WorkoutModel = new Model({
  title: null,
  sets: Immutable.List(),
});

export const workouts = new Immutable.List();
