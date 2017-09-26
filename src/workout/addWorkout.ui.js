import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Add from 'common/widgets/add.ui';
import Card from 'common/widgets/card.ui';

export default ({ action }) => (
  <Card>
    <View>
      <Add action={action} />
    </View>
  </Card>
);

const styles = StyleSheet.create({});
