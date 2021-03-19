import React, { FC } from 'react';
import { FetchBookmarksResponse } from '../apiClients';
import { BookmarkBox } from './BookmarkBox';

export type BookmarksAreaProps = {
  bookmarks: FetchBookmarksResponse

}

export const BookmarksArea: FC<BookmarksAreaProps> = (props) => {
  const { bookmarks } = props;

  return (
    <>
      {bookmarks?.map((item) => (
        <BookmarkBox
          key={item.bookmarkID}
          bookmarkID={item.bookmarkID}
          bookmarkURL={item.bookmarkURL}
          registeredDate={item.registeredDate}
          tags={item.tags}
        />
      ))}
    </>
  );
};
