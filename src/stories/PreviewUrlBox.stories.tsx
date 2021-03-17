import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

import { PreviewUrlBox, PreviewUrlBoxProps } from '../components/PreviewUrlBox';

export default {
  title: 'PreviewUrlBox',
  component: PreviewUrlBox,
} as Meta;

const Template: Story<PreviewUrlBoxProps> = (args) => <PreviewUrlBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  siteUrl: 'https://qiita.com/daiki-kon/items/aab32c65932c6e2de84f',
  imageUrl: 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-1150d8b18a7c15795b701a55ae908f94.png?ixlib=rb-1.2.2&w=1200&mark=https%3A%2F%2Fqiita-user-contents.imgix.net%2F~text%3Fixlib%3Drb-1.2.2%26w%3D840%26h%3D380%26txt%3DECR%25E3%2581%25AE%25E3%2582%25A4%25E3%2583%25A1%25E3%2583%25BC%25E3%2582%25B8%25E3%2582%2592%25E3%2583%2597%25E3%2583%25AB%25E3%2581%2599%25E3%2582%258BCodebuild%25E3%2582%2592Terraform%25E3%2581%25A7%25E4%25BD%259C%25E3%2582%258B%26txt-color%3D%2523333%26txt-font%3DHiragino%2520Sans%2520W6%26txt-size%3D54%26txt-clip%3Dellipsis%26txt-align%3Dcenter%252Cmiddle%26s%3Dd0284bd9114c22d06e59e461201f0508&mark-align=center%2Cmiddle&blend=https%3A%2F%2Fqiita-user-contents.imgix.net%2F~text%3Fixlib%3Drb-1.2.2%26w%3D840%26h%3D500%26txt%3D%2540daiki-kon%26txt-color%3D%2523333%26txt-font%3DHiragino%2520Sans%2520W6%26txt-size%3D45%26txt-align%3Dright%252Cbottom%26s%3Dc97caacf1ab0d4f2d2f5009ed1eebca9&blend-align=center%2Cmiddle&blend-mode=normal&s=b5836d2c2c7f74d6e50e9c1d09c566c4',
  title: 'ECRのイメージをプルするCodebuildをTerraformで作る - Qiita',

};
