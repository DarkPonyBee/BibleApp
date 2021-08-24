import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bookContainer: {marginVertical: 4, marginLeft: 16},
  bookTitle: {fontSize: 18},
  chapterCountText: {fontSize: 14},
  chapterContainer: {marginVertical: 8},
  chapterTitleContainer: {
    backgroundColor: 'gray',
    marginHorizontal: 4,
    width: 40,
    paddingVertical: 6,
  },
  highlight: {
    backgroundColor: 'yellow',
  },
  chapterTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  screenHeader: {
    fontSize: 28,
    fontWeight: '800',
    marginLeft: 12,
  },
});
