import React, {useEffect} from 'react';
import {View, FlatList, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {HomeStackNavProps} from '../../../navigation/StackParamList';
import {actions} from '../../../store';
import {getBible} from '../../../store/selectors';
import {IVerses} from '../../../types';
import {styles} from './style';

export const ChapterScreen: React.FC<HomeStackNavProps<'Chapter'>> = ({
  navigation,
  route,
}) => {
  const {title, chapter} = route.params;
  const dispatch = useDispatch();
  const bible = useSelector(getBible);

  useEffect(() => {
    dispatch(actions.fetchBible(title, chapter));
  }, [title, chapter, dispatch]);

  const renderItem = ({item}: {item: IVerses}) => {
    return (
      <View>
        <Text>Verse: {item.verse}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  const handleNavigate = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={handleNavigate} style={styles.backBtn}>
        <Text style={styles.backTitle}>{'< Book List'}</Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <Text style={styles.reference}>{bible?.reference}</Text>
        <Text style={styles.description}>{bible?.text}</Text>
        {bible && <FlatList data={bible?.verses} renderItem={renderItem} />}
      </ScrollView>
    </View>
  );
};
