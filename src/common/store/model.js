import Immutable from 'immutable';
import { randomId } from 'common/utils/random';

export default props => {
  const Model = Immutable.Record({
    ...props,
    _id: null,
  });
  Model.prototype.setId = function setId(id) {
    return this.merge({ _id: id || randomId() });
  };
  return Model;
};
