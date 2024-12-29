import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';

export const RepositoryListContainer = ({
  repositories,
  styles,
  ItemSeparator,
}) => {
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repositories={item} />}
    />
  );
};
