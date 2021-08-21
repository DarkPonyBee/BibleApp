import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './style';

const bookList = [
  {title: 'Matthew', count: 28},
  {title: 'Mark', count: 16},
  {title: 'Luke', count: 24},
  {title: 'John', count: 21},
  {title: 'Acts', count: 28},
  {title: 'Romans', count: 16},
  {title: '1 Corinthians', count: 16},
  {title: '2 Corinthians', count: 13},
  {title: 'Galatians', count: 6},
  {title: 'Ephesians', count: 6},
  {title: 'Philippians', count: 4},
  {title: 'Colossians', count: 4},
  {title: '1 Thessalonians', count: 5},
  {title: '2 Thessalonians', count: 3},
  {title: '1 Timothy', count: 6},
  {title: '2 Timothy', count: 4},
  {title: 'Titus', count: 3},
  {title: 'Philemon', count: 1},
  {title: 'Hebrews', count: 13},
  {title: 'James', count: 5},
  {title: '1 Peter', count: 5},
  {title: '2 Peter', count: 3},
  {title: '1 John', count: 5},
  {title: '2 John', count: 1},
  {title: '3 John', count: 1},
  {title: 'Jude', count: 1},
  {title: 'Revelation', count: 22},
];

interface IBook {
  title: string;
  count: number;
}

export const HomeScreen = () => {
  const [selectedBook, setSelectedBook] = useState('');

  const renderChapters = (item: IBook) => {
    return (
      <ScrollView horizontal style={styles.chapterContainer}>
        {Array(item.count)
          .fill(1)
          .map((value, index) => (
            <TouchableOpacity style={styles.chapterTitleContainer}>
              <Text style={styles.chapterTitle}>{index + 1}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    );
  };

  const renderBookItem = ({item}: {item: IBook}) => {
    return (
      <View style={styles.bookContainer}>
        <TouchableOpacity onPress={() => setSelectedBook(item.title)}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.chapterCountText}> {item.count} chapters</Text>
        </TouchableOpacity>
        {selectedBook === item.title && renderChapters(item)}
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Home1!</Text>
      <FlatList data={bookList} renderItem={renderBookItem} />
    </View>
  );
};
