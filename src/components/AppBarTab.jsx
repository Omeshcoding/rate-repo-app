import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const AppBarTab = ({ styles, isSignedIn, handleSignOut }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Pressable>
        <Link to="/" style={styles}>
          <Text style={styles}>Repositories</Text>
        </Link>
      </Pressable>

      {!isSignedIn ? (
        <Pressable style={styles}>
          <Text style={styles}>Sign In </Text>
        </Pressable>
      ) : (
        <Pressable onPress={() => handleSignOut()} style={styles}>
          <Text style={styles}>Sign Out </Text>
        </Pressable>
      )}
    </View>
  );
};

export default AppBarTab;
