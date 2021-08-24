import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HomeStackNavProps} from '../../../navigation/StackParamList';
import {actions} from '../../../store';
import {getBible} from '../../../store/selectors';

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

  return <></>;
};
