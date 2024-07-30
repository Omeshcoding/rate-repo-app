import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    color: theme.colors.textWhite,
  },
  titleText: {
    color: theme.colors.textWhite,
    fontSize: theme.fontSizes.tabTitle,
    paddingVertical: 40,
    paddingLeft: 26,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab styles={styles.titleText} />
    </View>
  );
};

export default AppBar;
