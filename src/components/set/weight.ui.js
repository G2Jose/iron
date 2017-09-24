import React from 'react';
import { TextInput } from 'react-native';

export default class Weight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    this.setState({ text: this.props.text });
  }

  render() {
    return (
      <TextInput
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        style={{ width: this.props.width, textAlign: 'center' }}
        keyboardType="numeric"
        onFocus={() => {
          this.setState({ text: this.state.text.replace(' kg', '') }, () => {
            if (this.state.text === '0') this.setState({ text: '' });
          });
        }}
        onBlur={() => {
          if (this.state.text === '') this.setState({ text: '0 kg' });
          else this.setState({ text: `${this.state.text} kg` });
        }}
      />
    );
  }
}
