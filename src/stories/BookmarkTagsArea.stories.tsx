import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

import { BookmarkTagsArea, BookmarkTagsAreaProps } from '../components/BookmarkTagsArea';

export default {
  title: 'BookmarkTagsArea',
  component: BookmarkTagsArea,
} as Meta;

const Template: Story<BookmarkTagsAreaProps> = (args) => <BookmarkTagsArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tags: [
    { name: 'hoge', id: '1' },
    { name: 'fuga', id: '2' },
  ],
};
