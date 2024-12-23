import { Text, View } from 'react-native';
import formatInThousands from '../utils/formatInThousands';

export default CountItem = ({ styles, label, count }) => (
  <View style={styles.countItem}>
    <Text style={styles.countItemCount} fontWeight="bold">
      {formatInThousands(count)}
    </Text>
    <Text color="textSecondary">{label} </Text>
  </View>
);
