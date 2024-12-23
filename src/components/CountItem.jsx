import { Text, View } from 'react-native';

export default CountItem = ({ styles, label, count }) => (
  <View style={styles.countItem}>
    <Text style={styles.countItemCount} fontWeight="bold">
      {count}
    </Text>
    <Text color="textSecondary">{label} </Text>
  </View>
);
