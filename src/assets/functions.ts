import { Book } from './types'; // Type declaration of book

/**
 * Find all the books which are in currently reading shelf.
 *
 * @param array all the books coming from the api calling.
 * @returns array of books which are in currently reading shelf.
 */

export const findCurrentlyReading = (array: Book[]): Book[] => {
  return array.filter((item) => item.shelf === 'currentlyReading');
};

/**
 * Find all the books which are in want to read shelf.
 *
 * @param array all the books coming from the api calling.
 * @returns array of books which are in want to read shelf.
 */

export const findWantToRead = (array: Book[]): Book[] => {
  return array.filter((item) => item.shelf === 'wantToRead');
};

/**
 * Find all the books which are in read shelf.
 *
 * @param array all the books coming from the api calling.
 * @returns array of books which are in read shelf.
 */

export const findRead = (array: Book[]): Book[] => {
  return array.filter((item) => item.shelf === 'read');
};

/**
 * Find all the books which are in none .
 *
 * @param array all the books coming from the api calling.
 * @returns array of books which are in none.
 */

export const findNone = (array: Book[]): Book[] => {
  return array.filter((item) => item.shelf === 'none');
};
