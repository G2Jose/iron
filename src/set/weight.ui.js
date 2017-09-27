import React from 'react';
import { TextInput } from 'react-native';

export default class Weight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editting: false };
  }

  render() {
    const { onWeightUpdate, weight, width } = this.props;
    return (
      <TextInput
        onChangeText={onWeightUpdate}
        value={this.state.editting ? `${weight}` : `${weight} lbs`}
        style={{ width, textAlign: 'center' }}
        keyboardType="numeric"
        onFocus={() => this.setState({ editting: true })}
        onBlur={() => this.setState({ editting: false })}
      />
    );
  }
}
