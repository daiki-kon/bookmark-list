import { useEffect, useState } from 'react';
import {
  fetchBookmarks, FetchBookmarksResponse, postBookmark, PostBookmarkResponse,
} from '../apiClients';

export type UseBookmarksResponse = [
  FetchBookmarksResponse,
  (bookmarkURL: string, tagsIDs: string[]) => Promise<void>
]

export const useBookmarks = ({ userName }:{userName: string}): UseBookmarksResponse => {
  const [bookmarks, setBookmarks] = useState<FetchBookmarksResponse>([]);
  const setFetchBookmarksResponse = async (name: string) => {
    const response: FetchBookmarksResponse = await fetchBookmarks({ userName: name });
    setBookmarks(response);
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

  return [bookmarks, createBookmark];
};
