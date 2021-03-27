import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BookmarksArea } from '../components/BookmarksArea';
import { useBookmarks } from '../hooks/Bookmarks';
import { CreateBookmarkModalContainer } from '../containers/CreateBookmarkModalContainer';

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const BookmarksPage: FC = () => {
  const { userName } = useParams<{ userName: string }>();
  const [bookmarks, createBookmark] = useBookmarks({ userName });

  return (
    <StyledWrapper>
      <CreateBookmarkModalContainer userName={userName} createBookmark={createBookmark} />
      {bookmarks?.length === 0
        ? <p>何もないよー</p>
        : <BookmarksArea userName={userName} bookmarks={bookmarks} />}
    </StyledWrapper>
  );
};
