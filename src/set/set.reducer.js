import { handleActions } from 'redux-actions';

import { addSet } from 'set/set.actions';
import { SetModel, sets as defaultState } from 'set/set.models';

export default handleActions(
  {
    [addSet().type](state, action) {
      return state.push(new SetModel(action.payload));
    },
  },
  defaultState
);
