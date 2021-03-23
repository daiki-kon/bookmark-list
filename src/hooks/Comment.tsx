import React, { FC, useState, useEffect } from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
import marked from 'marked';

type UseCommentResponse = [string, string, () => void, (markdown: string) => void]

export const useComment = (
  { userName, bookmarkID } : {userName: string, bookmarkID : string},
): UseCommentResponse => {
  const [commentMarkdown, setCommentMarkdown] = useState<string>('');

  Storage.configure({
    customPrefix: {
      public: '',
    },
    // ...
  });

  marked.setOptions({
    pedantic: false, // trueの場合はmarkdown.plに準拠する gfmを使用する場合はfalseで大丈夫
    gfm: true, // GitHub Flavored Markdownを使用
    breaks: true, // falseにすると改行入力は末尾の半角スペース2つになる
    sanitize: false, // trueにすると特殊文字をエスケープする
    silent: false, // trueにするとパースに失敗してもExceptionを投げなくなる
  });

  // TODO: リファクタリング必須
  const getTextFromS3 = async (): Promise<void> => {
    const fileURL = await Storage.get(`${userName}/${bookmarkID}.md`);

    const response = await fetch(fileURL.toString());
    if (response.status === 404) return;
    const reader = response.body?.getReader();

    // eslint-disable-next-line prefer-const
    let data = await reader?.read();
    let text: string = '';
    const decoder = new TextDecoder();
    while (data?.done === false) {
      if (data !== undefined) {
        text += decoder.decode(data?.value);
      }
      // eslint-disable-next-line no-await-in-loop
      data = await reader?.read();
    }

    setCommentMarkdown(text);
  };

  const saveMarkdown = (): void => {
    console.log('save');
  };

  const onChangeMarkdown = (markdown: string): void => {
    setCommentMarkdown(markdown);
  };

  useEffect(() => {
    getTextFromS3();
  }, []);

  return [marked(commentMarkdown), commentMarkdown, saveMarkdown, onChangeMarkdown];
};
