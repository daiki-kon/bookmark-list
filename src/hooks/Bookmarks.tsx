import { useEffect, useState } from 'react';
import { fetchBookmarks, FetchBookmarksResponse } from '../apiClients';

export type UseBookmarksResponse = [ FetchBookmarksResponse ]

export const useBookmarks = ({ userName }:{userName: string}): UseBookmarksResponse => {
  const [bookmarks, setBookmarks] = useState<FetchBookmarksResponse>([]);
  const setFetchBookmarksResponse = async (name: string) => {
    const response: FetchBookmarksResponse = await fetchBookmarks({ userName: name });
    setBookmarks(response);
  };

  useEffect(() => {
    setFetchBookmarksResponse(userName);
  }, [userName]);

  return [bookmarks];
};
