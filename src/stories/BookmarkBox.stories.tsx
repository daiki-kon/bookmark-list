import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

import { BookmarkBox, BookmarkBoxProps } from '../components/BookmarkBox';

export default {
  title: 'BookmarkBox',
  component: BookmarkBox,
} as Meta;

const Template: Story<BookmarkBoxProps> = (args) => <BookmarkBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bookmarkID: '86a7964f-4a23-40e9-a33b-dc41a98d5df3',
  bookmarkURL: 'https://qiita.com/yusaku1106/items/0190e3b35d239d1e9545',
  registeredDate: '2014-10-10T13:50:40+09:00',
  tags: [
    {
      tagID: '9c0f5738-6319-45cc-827b-c97471bae858',
      tagName: 'React',
    },
    {
      tagID: '8e6e97e6-260a-4d94-8f8b-da93efac4f13',
      tagName: 'Typescript',
    },
  ],
};
