import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { BookmarksArea } from '../components/BookmarksArea';
import { useBookmarks } from '../hooks/Bookmarks';
import { CreateBookmarkModalContainer } from '../containers/CreateBookmarkModalContainer';

export const BookmarksPage: FC = () => {
  const { userName } = useParams<{ userName: string }>();
  const [bookmarks, createBookmark] = useBookmarks({ userName });

  return (
    <div>
      <CreateBookmarkModalContainer userName={userName} createBookmark={createBookmark} />
      {bookmarks?.length === 0
        ? <p>何もないよー</p>
        : <BookmarksArea bookmarks={bookmarks} />}
    </div>
  );
};
