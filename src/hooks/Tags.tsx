import { useEffect, useState } from 'react';
import {
  fetchTags, FetchTagsResponse, postTag, PostTagResponse,
} from '../apiClients';

export type UseTagsResponse = [
  FetchTagsResponse,
  boolean,
  (tagName: string) => Promise<void>,
];

export const useTags = (userName: string): UseTagsResponse => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [tags, setTags] = useState<FetchTagsResponse>([]);

  const setFetchTagsResponse = async (name: string) => {
    setIsFetching(true);
    const response: FetchTagsResponse = await fetchTags({ userName: name });
    setTags(response);
    setIsFetching(false);
  };

  const createTag = async (tagName: string): Promise<void> => {
    const response: PostTagResponse = await postTag({ userName, tagName });
    setTags((preState) => [...preState, { tagID: response.id, tagName: response.name }]);
  };

  useEffect(() => {
    setFetchTagsResponse(userName);
  }, []);

  return [tags, isFetching, createTag];
};
