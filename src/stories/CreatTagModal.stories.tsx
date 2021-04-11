import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

import { CreateTagModal, CreateTagModalProps } from '../components/CreateTagModal';

export default {
  title: 'CreateTagModal',
  component: CreateTagModal,
} as Meta;

const Template: Story<CreateTagModalProps> = (args) => <CreateTagModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
