const api = 'https://reactnd-books-api.udacity.com';

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

/**
 * Api the all the information of a book .
 * @param bookId the unique id of the book
 * @returns array all the information of the book
 */

export const get = (bookId: string) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

/**
 * Api call to get all the books .
 *
 * @returns array of all the books.
 */

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books);

/**s
 * Api call to update the shelf property of a book .
 * @param book the bject of the book
 * @param shelf the shelf where the book need to be moved
 * @returns void
 */

export const update = (book: any, shelf: string) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

/**
 * Api call to update the shelf property of a book .
 * @param query the search parameter
 * @param maxResults set te number of output
 * @returns array of books as per input search parameters
 */

export const search = (query: string, maxResults: any) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data);
