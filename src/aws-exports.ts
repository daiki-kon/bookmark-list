import Amplify, { API } from 'aws-amplify';

const auth = {
  // OPTIONAL - if your API requires authentication
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    // REQUIRED - Amazon Cognito Region
    region: process.env.REACT_APP_AWS_PROJECT_REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: process.env.REACT_APP_AWS_USER_POOLS_ID,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: process.env.REACT_APP_AWS_USER_POOLS_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: process.env.REACT_APP_API_NAME,
        endpoint: process.env.REACT_APP_API_ENDPOINT,
        region: process.env.REACT_APP_AWS_PROJECT_REGION,
      },
    ],
  },
};

export default auth;
