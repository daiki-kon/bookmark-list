import { API } from 'aws-amplify';
import auth from './aws-exports';

export type FetchOgpQuery = {
  url: string;
}

export type FetchOgpResponse = {
  ogSiteName: string;
  ogTitle: string;
  ogImageURL: string;
}

export const fetchOgp = async (query: FetchOgpQuery): Promise<FetchOgpResponse> => {
  const apiName = auth.API.endpoints[0].name;
  const path = '/url';
  const parameter = {
    response: true,
    header: 'Content-Type: application/json',
    queryStringParameters: {
      url: query.url,
    },
  };

  const response = await API.get(apiName, path, parameter);

  return response.data as FetchOgpResponse;
};

export type FetchBookmarksQuery = {
  userName: string;
}

export type FetchBookmarksResponse = {
  bookmarkID: string;
  bookmarkURL: string;
  registeredDate: string;
  tags: {
    tagID: string;
    tagName: string;
  }[]
}[];

// eslint-disable-next-line max-len
export const fetchBookmarks = async (query: FetchBookmarksQuery): Promise<FetchBookmarksResponse> => {
  const apiName = auth.API.endpoints[0].name;
  const path = `/user/${query.userName}/bookmarks`;
  const parameter = {
    response: true,
    header: 'Content-Type: application/json',
  };

  const response = await API.get(apiName, path, parameter);

  return response.data as FetchBookmarksResponse;
};
