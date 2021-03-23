import React, { FC, useState } from 'react';
import { CommentBox } from '../components/CommentBox';
import { useComment } from '../hooks/Comment';

export type CommentBoxContainerProps = {
  userName: string;
  bookmarkID: string;
}

export const CommentBoxContainer: FC<CommentBoxContainerProps> = (props) => {
  const { userName, bookmarkID } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // eslint-disable-next-line max-len
  const [commentHtml, commentMarkdown, saveMarkdown, onChangeMarkdown] = useComment({ userName, bookmarkID });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeMarkdown(event.target.value);
  };

  const onClickSave = () => {
    setIsEdit(false);
    saveMarkdown();
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <CommentBox
      isEdit={isEdit}
      commentMarkdown={commentMarkdown}
      commentHtml={commentHtml}
      onChange={onChange}
      onClickSave={onClickSave}
      onClickEdit={onClickEdit}
    />
  );
};
