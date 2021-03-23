import React, { FC } from 'react';
import styled from 'styled-components';
import { FetchBookmarksResponse } from '../apiClients';
import { BookmarkBox } from './BookmarkBox';

export type BookmarksAreaProps = {
  userName: string;
  bookmarks: FetchBookmarksResponse

}

const StyledArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BookmarksArea: FC<BookmarksAreaProps> = (props) => {
  const { userName, bookmarks } = props;

  return (
    <StyledArea>
      {bookmarks?.map((item) => (
        <BookmarkBox
          userName={userName}
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
