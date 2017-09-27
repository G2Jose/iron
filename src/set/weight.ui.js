import React from 'react';
import { TextInput } from 'react-native';

export default class Weight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editting: false };
  }

  render() {
    const { onWeightUpdate, weight, width } = this.props;
    const getWeightTextToDisplay = (editting, weight) => {
      if (!editting) return `${weight} lb`;
      else if (weight === 0) return '';
      return weight;
    };
    return (
      <TextInput
        onChangeText={onWeightUpdate}
        value={getWeightTextToDisplay(this.state.editting, weight)}
        style={{ width, textAlign: 'center' }}
        keyboardType="numeric"
        onFocus={() => this.setState({ editting: true })}
        onBlur={() => this.setState({ editting: false })}
      />
    );
  }
}
