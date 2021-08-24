export enum STATUSES {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export interface AppState {
  bibleGetStatus: STATUSES;
  bible: Bible | undefined;
  favorites: IChapter[];
}

export interface Bible {
  reference: string;
  verses: IVerses[];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

export interface IChapter {
  title: string;
  chapter: number;
}

export interface IVerses {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}
