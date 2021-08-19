import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import cx from 'classnames';

import { Tabs, TabsProps } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    isDarkMode: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

type TabsStoryProps = TabsProps & {
  isDarkMode: boolean;
};

const Template: Story<TabsStoryProps> = ({ isDarkMode, ...args }) => {
  const className = cx(
    {
      'tw-dark': isDarkMode,
      'tw-bg-gray-800': isDarkMode,
    },
    'tw-p-5'
  );
  return (
    <div className={className}>
      <Tabs {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    { label: 'Tab 1', id: 'a1' },
    { label: 'Tab 2', id: 'a2' },
    { label: 'Tab 3', id: 'a3' },
  ],
};
