import { Animated } from 'react-native';

const linearIncrease = (valToAnimate, target, duration) =>
  Animated.timing(valToAnimate, { toValue: target, duration });

export { linearIncrease };
