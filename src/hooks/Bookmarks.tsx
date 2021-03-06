import { useEffect, useState } from 'react';
import {
  fetchBookmarks, FetchBookmarksResponse, postBookmark, PostBookmarkResponse,
} from '../apiClients';

export type UseBookmarksResponse = [
  FetchBookmarksResponse,
  boolean,
  // eslint-disable-next-line no-unused-vars
  (bookmarkURL: string, tagsIDs: string[]) => Promise<void>,
  // eslint-disable-next-line no-unused-vars
  (tagId: string) => void,
]

export const useBookmarks = ({ userName }:{userName: string}): UseBookmarksResponse => {
  const [bookmarks, setBookmarks] = useState<FetchBookmarksResponse>([]);
  const [viewableBookmarks, setViewableBookmarks] = useState<FetchBookmarksResponse>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
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
        tags: response.tags.map((item) => ({ id: item.id, name: item.name })),
      }]));
  };

  const filterTag = (tagId: string): void => {
    setViewableBookmarks(
      bookmarks.filter((item) => item.tags.find((tag) => (tag.id === tagId))),
    );
  };

  useEffect(() => {
    setFetchBookmarksResponse(userName);
  }, [userName]);

  useEffect(() => {
    setViewableBookmarks(bookmarks);
  }, [bookmarks]);

  return [viewableBookmarks, isFetching, createBookmark, filterTag];
};
