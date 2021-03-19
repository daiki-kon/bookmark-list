import React, { FC } from 'react';
import { CreateBookmarkModal } from '../components/CreateBookmarkModal';

export type CreateBookmarkModalContainerProps = {
  userName: string;
  createBookmark: (bookmarkURL: string, tagsIDs: string[]) => Promise<void>;
}

export const CreateBookmarkModalContainer: FC<CreateBookmarkModalContainerProps> = (props) => {
  const { userName, createBookmark } = props;

  return (
    <CreateBookmarkModal userName={userName} createBookmark={createBookmark} />
  );
};
