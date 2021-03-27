import { useEffect, useState } from 'react';
import {
  fetchBookmarks, FetchBookmarksResponse, postBookmark, PostBookmarkResponse,
} from '../apiClients';

export type UseBookmarksResponse = [
  FetchBookmarksResponse,
  boolean,
  // eslint-disable-next-line no-unused-vars
  (bookmarkURL: string, tagsIDs: string[]) => Promise<void>
]

export const useBookmarks = ({ userName }:{userName: string}): UseBookmarksResponse => {
  const [bookmarks, setBookmarks] = useState<FetchBookmarksResponse>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const setFetchBookmarksResponse = async (name: string) => {
    setIsFetching(true);
    const response: FetchBookmarksResponse = await fetchBookmarks({ userName: name });
    setBookmarks(response);
    setIsFetching(false);
  };

  const createBookmark = async (bookmarkURL: string, tagsIDs: string[]): Promise<void> => {
    const response: PostBookmarkResponse = await postBookmark(
      { userName, requestBody: { bookmarkURL, tagsIDs } },
    );
    setBookmarks((preState) => ([
      ...preState,
      {
        bookmarkID: response.bookmarkID,
        bookmarkURL,
        registeredDate: response.registeredDate,
        tags: [],
      }]));
  };

  useEffect(() => {
    setFetchBookmarksResponse(userName);
  }, [userName]);

  return [bookmarks, isFetching, createBookmark];
};
