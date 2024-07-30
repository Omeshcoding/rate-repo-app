import React from 'react';
import { Pressable, Text } from 'react-native';

const AppBarTab = ({ styles }) => {
  return (
    <Pressable>
      <Text style={styles}>Repositories</Text>
    </Pressable>
  );
};

export default AppBarTab;
