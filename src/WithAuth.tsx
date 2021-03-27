import React, { FC, useEffect } from 'react';
import {
  AmplifyAuthenticator,
  AmplifyConfirmSignUp,
  AmplifySignUp,
  AmplifySignIn,
  AmplifyForgotPassword,
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Redirect } from 'react-router';
import { Header } from './components/Header';

const AuthStateApp: FC = ({ children }) => {
  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<any | undefined>();

  useEffect(() => onAuthUIStateChange((nextAuthState, authData: any) => {
    setAuthState(nextAuthState);
    setUser(authData);
  }), []);

  return authState === AuthState.SignedIn && user ? (
    <>
      <Header userName={user.username} />
      <Redirect to={`/bookmarks/${user.username}`} />
      {children}
    </>
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignIn
        headerText="My Custom Sign In Text"
        slot="sign-in"
      />
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="username"
        formFields={[
          {
            type: 'username',
            label: 'user name',
            required: true,
          },
          {
            type: 'email',
            label: 'email',
            required: true,
          },
          {
            type: 'password',
            label: 'password',
            required: true,
          },

        ]}
      />
      <AmplifyConfirmSignUp
        headerText="My Custom Confirm Sign Up Text"
        slot="confirm-sign-up"
      />
      <AmplifyForgotPassword
        headerText="My Custom Forgot Password Text"
        slot="forgot-password"
      />
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;
