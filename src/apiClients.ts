import { API, Auth } from 'aws-amplify';
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
