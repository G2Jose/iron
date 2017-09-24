import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Circle from 'components/widgets/circle.ui';

export default class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Circle color="blue" diameter={this.props.width} />;
  }
}
