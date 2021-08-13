import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tabs, TabsProps } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }],
};
