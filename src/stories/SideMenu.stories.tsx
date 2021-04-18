import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  Segment, Header, Image,
} from 'semantic-ui-react';

import { SideMenu, SideMenuProps } from '../components/SideMenu';

export default {
  title: 'SideMenu',
  component: SideMenu,
} as Meta;

const Template: Story<SideMenuProps> = (args) => (
  <SideMenu {...args}>
    <Segment basic>
      <Header as="h3">Application Content</Header>
      <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
    </Segment>
  </SideMenu>
);

export const Primary = Template.bind({});
Primary.args = {
  tags: [{
    id: 'hoge',
    name: 'hoge',
  },
  {
    id: 'fuga',
    name: 'fuga',
  }],

};
