import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    color: theme.colors.textWhite,
  },
  titleText: {
    color: theme.colors.textWhite,
    fontSize: theme.fontSizes.tabTitle,
    paddingVertical: 20,
    paddingLeft: 26,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab styles={styles.titleText} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
