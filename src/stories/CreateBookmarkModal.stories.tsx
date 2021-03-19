import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

import { CreateBookmarkModal, CreateBookmarkModalProps } from '../components/CreateBookmarkModal';

export default {
  title: 'CreateBookmarkModal',
  component: CreateBookmarkModal,
} as Meta;

const Template: Story<CreateBookmarkModalProps> = (args) => <CreateBookmarkModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  userName: 'hiroki',
};
