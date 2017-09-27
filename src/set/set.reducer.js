import { handleActions } from 'redux-actions';

import { addSet, editSet } from 'set/set.actions';
import { SetModel, sets as defaultState } from 'set/set.models';

export default handleActions(
  {
    [addSet().type](state, action) {
      return state.push(new SetModel(action.payload).setId());
    },
    [editSet().type](state, action) {
      const { _id, ...rest } = action.payload;
      const setIndex = state.findIndex(set => set._id === _id);
      const oldSet = state.get(setIndex);
      const newSet = oldSet.merge(rest);
      return state.set(setIndex, newSet);
    },
  },
  defaultState,
);
