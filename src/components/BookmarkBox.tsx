/* eslint-disable max-len */
import React, { FC } from 'react';
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
  max-width: 450px;
  margin-left: 20px;
  margin-top: 10px;
  /* semantic ui と同じスタイルにする */
  border-radius: .28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  padding: 5px;
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
