/* eslint-disable max-len */
import React, { FC, useEffect } from 'react';
import { Image, Dimmer, Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { CommentBoxContainer } from '../containers/CommentBoxContainer';
import { PreviewUrlBoxContainer } from '../containers/PreviewUrlBoxContainer';

export type BookmarkBoxProps = {
  userName: string;
  bookmarkID: string;
  bookmarkURL: string;
  registeredDate: string;
  tags: {
    tagID: string;
    tagName: string;
  }[]
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 450px !important;
  margin-left: 20px;
  margin-top: 10px;
`;

export const BookmarkBox: FC<BookmarkBoxProps> = (props) => {
  const {
    bookmarkURL, userName, bookmarkID,
  } = props;

  return (
    <Wrapper>
      <PreviewUrlBoxContainer bookmarkURL={bookmarkURL} />
      <CommentBoxContainer userName={userName} bookmarkID={bookmarkID} />
    </Wrapper>
  );
};
