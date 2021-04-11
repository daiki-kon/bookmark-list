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

export type FetchTagsQuery = {
  userName: string;
}

export type FetchTagsResponse = {
  tagID: string;
  tagName: string;
}[];

export const fetchTags = async (query: FetchTagsQuery): Promise<FetchTagsResponse> => {
  const apiName = auth.API.endpoints[0].name;
  const path = `/user/${query.userName}/tags`;
  const parameter = {
    response: true,
    header: 'Content-Type: application/json',
  };

  const response = await API.get(apiName, path, parameter);

  return response.data as FetchTagsResponse;
};

export type PostTagRequest = {
  userName: string;
  tagName: string;
}

export type PostTagResponse = {
  id: string;
  name: string;
}

export const postTag = async (request: PostTagRequest): Promise<PostTagResponse> => {
  const apiName = auth.API.endpoints[0].name;
  const path = `/user/${request.userName}/tag`;
  const parameter = {
    response: true,
    header: 'Content-Type: application/json',
    body: {
      tagName: request.tagName,
    },
  };

  const response = await API.post(apiName, path, parameter);

  return response.data as PostTagResponse;
};

export type PostBookmarkRequest = {
  userName: string;
  requestBody: {
    bookmarkURL: string;
    tagsIDs: string[];
  }
}

export type PostBookmarkResponse = {
  bookmarkID: string;
  registeredDate: string;
};

// eslint-disable-next-line max-len
export const postBookmark = async (request: PostBookmarkRequest): Promise<PostBookmarkResponse> => {
  const apiName = auth.API.endpoints[0].name;
  const path = `/user/${request.userName}/bookmark`;
  const parameter = {
    response: true,
    header: 'Content-Type: application/json',
    body: {
      bookmarkURL: request.requestBody.bookmarkURL,
      tagsIDs: request.requestBody.tagsIDs,
    },
  };

  const response = await API.post(apiName, path, parameter);

  return response.data as PostBookmarkResponse;
};
