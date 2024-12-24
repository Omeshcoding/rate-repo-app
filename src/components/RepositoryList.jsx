import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.primaryBackGround,
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return (
    <RepositoryListContainer repositories={repositories} styles={styles} />
  );
};

export default RepositoryList;
