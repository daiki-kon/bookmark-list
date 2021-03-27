import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

import { CommentBox, CommentBoxProps } from '../components/CommentBox';

export default {
  title: 'CommentBox',
  component: CommentBox,
} as Meta;

const Template: Story<CommentBoxProps> = (args) => <CommentBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
