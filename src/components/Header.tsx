import React, { FC } from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import styled from 'styled-components';

export type HeaderProps = {
  userName: string;
};

const Wrapper = styled.div`
  background-color: darkgray;
  min-height: 55px;
  display: flex;
  align-items:center;
`;

const StyledTitle = styled.p`
  margin-left: 20px;
  margin-bottom: 0%;
  font-weight: bold;
  font-size: 20px
`;

const StyledUserName = styled.p`
  margin-left: auto;
  margin-right: 30px;
  margin-bottom: 0%;
`;

export const Header: FC<HeaderProps> = (props) => {
  const { userName } = props;

  return (
    <Wrapper>
      <StyledTitle>Bookmark-List</StyledTitle>
      <StyledUserName>{`user: ${userName}`}</StyledUserName>
      <AmplifySignOut>sign out</AmplifySignOut>
    </Wrapper>
  );
};
