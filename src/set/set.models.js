import Immutable from 'immutable';
import Model from 'common/store/model';

export const SetModel = new Model({
  weight: 0,
  numReps: 0,
  workout: null,
});

export const sets = Immutable.List();
