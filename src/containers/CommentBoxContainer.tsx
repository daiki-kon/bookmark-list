import React, { FC, useState } from 'react';
import marked from 'marked';
import { CommentBox } from '../components/CommentBox';

export type CommentBoxContainerProps = {
}

export const CommentBoxContainer: FC<CommentBoxContainerProps> = (props) => {
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [commentMarkdown, setCommentMarkdown] = useState<string>('');
  const [commentHtml, setCommentHtml] = useState<string>('');

  marked.setOptions({
    pedantic: false, // trueの場合はmarkdown.plに準拠する gfmを使用する場合はfalseで大丈夫
    gfm: true, // GitHub Flavored Markdownを使用
    breaks: true, // falseにすると改行入力は末尾の半角スペース2つになる
    sanitize: true, // trueにすると特殊文字をエスケープする
    silent: false, // trueにするとパースに失敗してもExceptionを投げなくなる
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setCommentMarkdown(event.target.value);
  };

  const onClickSave = () => {
    const html: string = marked(commentMarkdown);
    setCommentHtml(html);
    setIsEdit(false);
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
