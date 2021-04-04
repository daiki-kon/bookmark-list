import { useEffect, useState } from 'react';
import { fetchTags, FetchTagsResponse } from '../apiClients';

export type UseTagsResponse = [
  FetchTagsResponse,
  boolean
];

export const useTags = (userName: any): UseTagsResponse => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [tags, setTags] = useState<FetchTagsResponse>([]);

  const setFetchTagsResponse = async (name: string) => {
    setIsFetching(true);
    const response: FetchTagsResponse = await fetchTags({ userName: name });
    setTags(response);
    console.log(response);
    setIsFetching(false);
  };

  useEffect(() => {
    setFetchTagsResponse(userName);
  }, []);

  return [tags, isFetching];
};
