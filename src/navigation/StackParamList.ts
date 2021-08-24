import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type MainTabsParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Favorites: undefined;
};

export type MainTabsNavProps<T extends keyof MainTabsParamList> = {
  navigation: BottomTabNavigationProp<MainTabsParamList, T>;
  route: RouteProp<MainTabsParamList, T>;
};

export type HomeStackParamList = {
  Home: undefined;
  Chapter: {title: string; chapter: number};
};

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: StackNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};
