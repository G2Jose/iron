import React from 'react';
import { View } from 'react-native';

import Add from 'common/widgets/add.ui';
import Card from 'common/widgets/card.ui';

export default ({ action }) => (
  <Card>
    <View>
      <Add action={action} />
    </View>
  </Card>
);
