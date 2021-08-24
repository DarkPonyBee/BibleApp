import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {MainTabsNavProps} from '../../navigation/StackParamList';
import {getFavorites} from '../../store/selectors';
import {IChapter} from '../../types';
import {styles} from './style';

export const FavoritesScreen: React.FC<MainTabsNavProps<'Favorites'>> = ({
  navigation,
}) => {
  const favorites = useSelector(getFavorites);

  const handleChapterClick = (item: IChapter) => {
    navigation.navigate('HomeStack', {screen: 'Chapter', params: item});
  };

  const renderItem = ({item}: {item: IChapter}) => {
    return (
      <TouchableOpacity onPress={() => handleChapterClick(item)}>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text style={styles.chapter}>Chapter: {item.chapter}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={favorites} renderItem={renderItem} />
    </View>
  );
};
