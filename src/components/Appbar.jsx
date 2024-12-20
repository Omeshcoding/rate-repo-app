import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';
import useAuthStorage from '../hooks/useAuthStorage';
import useSignOut from '../hooks/useSignOut';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-native';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    color: theme.colors.textWhite,
  },
  titleText: {
    color: theme.colors.textWhite,
    fontSize: theme.fontSizes.tabTitle,
    paddingVertical: 16,
    paddingLeft: 10,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signOut = useSignOut();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserSignedIn = async () => {
      const token = await authStorage.getAccessToken();
      if (token) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    };
    checkUserSignedIn();
  }, [navigate]);
  const handleSignOut = () => {
    if (isSignedIn) {
      signOut();
      setIsSignedIn(false);
      navigate('/signin');
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab
          styles={styles.titleText}
          isSignedIn={isSignedIn}
          handleSignOut={handleSignOut}
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
