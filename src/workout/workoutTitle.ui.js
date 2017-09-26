import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class WorkoutTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editting: false };
  }

  render() {
    const { title, onTitleChange } = this.props;
    if (!this.state.editting) {
      return (
        <TouchableHighlight
          onPress={() => {
            this.setState({ editting: true });
          }}
        >
          <View style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </TouchableHighlight>
      );
    }
    return (
      <TextInput
        ref={component => {
          // We use this to focus TextInput as soon as it's rendered
          this.textInput = component;
          if (this.textInput) this.textInput.focus();
        }}
        onChangeText={onTitleChange}
        value={title === 'Unnamed workout' ? '' : title}
        onBlur={() => this.setState({ editting: false })}
      />
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
