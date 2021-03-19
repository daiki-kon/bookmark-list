import React, { FC } from 'react';
import styled from 'styled-components';
import { FetchBookmarksResponse } from '../apiClients';
import { BookmarkBox } from './BookmarkBox';

export type BookmarksAreaProps = {
  bookmarks: FetchBookmarksResponse

}

const StyledArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BookmarksArea: FC<BookmarksAreaProps> = (props) => {
  const { bookmarks } = props;

  return (
    <StyledArea>
      {bookmarks?.map((item) => (
        <BookmarkBox
          key={item.bookmarkID}
          bookmarkID={item.bookmarkID}
          bookmarkURL={item.bookmarkURL}
          registeredDate={item.registeredDate}
          tags={item.tags}
        />
      ))}
    </StyledArea>
  );
};
