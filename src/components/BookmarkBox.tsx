/* eslint-disable max-len */
import React, { FC } from 'react';
import {
  Divider,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { CommentBoxContainer } from '../containers/CommentBoxContainer';
import { PreviewUrlBoxContainer } from '../containers/PreviewUrlBoxContainer';
import { BookmarkTagsArea } from './BookmarkTagsArea';
import { PostTagResponse } from '../apiClients';

export type BookmarkBoxProps = {
  userName: string;
  bookmarkID: string;
  bookmarkURL: string;
  registeredDate: string;
  tags: PostTagResponse[];
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 400px;
  margin-left: 20px;
  margin-top: 20px;
  /* semantic ui と同じスタイルにする */
  border-radius: .28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  padding: 5px;
`;

const StyledTagArea = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;

export const BookmarkBox: FC<BookmarkBoxProps> = (props) => {
  const {
    bookmarkURL, userName, bookmarkID, tags,
  } = props;

  return (
    <Wrapper>
      <PreviewUrlBoxContainer bookmarkURL={bookmarkURL} />
      <CommentBoxContainer userName={userName} bookmarkID={bookmarkID} />
      <StyledTagArea>
        <Divider />
        <BookmarkTagsArea tags={tags} />
      </StyledTagArea>
    </Wrapper>
  );
};
