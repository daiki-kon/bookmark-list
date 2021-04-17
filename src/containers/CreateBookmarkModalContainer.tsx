import React, { FC } from 'react';
import { CreateBookmarkModal } from '../components/CreateBookmarkModal';
import { FetchTagsResponse } from '../apiClients';

export type CreateBookmarkModalContainerProps = {
  userName: string;
  createBookmark: (bookmarkURL: string, tagsIDs: string[]) => Promise<void>;
  tags: FetchTagsResponse;

}

export const CreateBookmarkModalContainer: FC<CreateBookmarkModalContainerProps> = (props) => {
  const { userName, createBookmark, tags } = props;

  const selectTagsOptions = tags.map((item) => ({
    key: item.tagID,
    text: item.tagName,
    value: item.tagID,
  }));

  return (
    <CreateBookmarkModal
      userName={userName}
      createBookmark={createBookmark}
      selectTagsOptions={selectTagsOptions}
    />
  );
};
