import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const AppBarTab = ({ styles }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Pressable>
        <Link to="/" style={styles}>
          <Text style={styles}>Repositories</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/signin" style={styles}>
          <Text style={styles}>Sign In</Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
