import { Book } from './types';

export const findCurrentlyReading = (array: Book[]): Book[] => {
  return array.filter((item) => item.shelf === 'currentlyReading');
};

export const findWantToRead = (array: Book[]): Book[] => {
  return array.filter((item) => item.shelf === 'wantToRead');
};

export const findRead = (array: Book[]): Book[] => {
  return array.filter((item) => item.shelf === 'read');
};

export const findNone = (array: Book[]): Book[] => {
  return array.filter((item) => item.shelf === 'none');
};
