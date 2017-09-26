import Immutable from 'immutable';
import { randomId } from 'common/utils/random';

export default props =>
  Immutable.Record({
    ...props,
  });
