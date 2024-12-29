import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import theme from '../theme';
import CountItem from './CountItem';

const styles = StyleSheet.create({
  separator: {
    // marginTop: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  flexItem: {
    flex: 1,
    flexDirection: 'row',
    gap: 30,
  },
  imageStyle: { width: 60, height: 60, borderRadius: 10 },
  tag: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    width: 100,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 10,
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'space-around',
    marginHorizontal: 4,
    marginTop: 10,
  },
  countItem: {
    flexGrow: 0,
    algignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});
const RepositoryItem = ({ repositories }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repositories;
  return (
    <View testID="repositoryItem" style={styles.separator}>
      <View style={styles.flexItem}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.imageStyle} />
        <View style={{ flex: 1, gap: 10 }}>
          <Text
            style={{
              color: theme.colors.textPrimary,
              fontWeight: theme.fontWeights.bold,
              fontSize: theme.fontSizes.subheading,
            }}
          >
            {fullName}
          </Text>
          <Text
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            {description}
          </Text>
          <Text style={styles.tag}>{language}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <CountItem styles={styles} label="Stars" count={stargazersCount} />
        <CountItem styles={styles} label="Forks" count={forksCount} />
        <CountItem styles={styles} label="Reviews" count={reviewCount} />
        <CountItem styles={styles} label="Rating" count={ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
