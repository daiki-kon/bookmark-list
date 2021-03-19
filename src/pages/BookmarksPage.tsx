import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { BookmarksArea } from '../components/BookmarksArea';
import { useBookmarks } from '../hooks/Bookmarks';

export const BookmarksPage: FC = () => {
  const { userName } = useParams<{ userName: string }>();
  const [bookmarks] = useBookmarks({ userName });

  return (
    <div>
      {bookmarks?.length === 0
        ? <p>何もないよー</p>
        : <BookmarksArea bookmarks={bookmarks} />}
    </div>
  );
};
