import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import cx from 'classnames';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    isDarkMode: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

type ButtonStoryProps = ButtonProps & {
  isDarkMode: boolean;
};

const Template: Story<ButtonStoryProps> = ({ isDarkMode, ...args }) => {
  const className = cx(
    {
      'tw-dark': isDarkMode,
      'tw-bg-gray-800': isDarkMode,
    },
    'tw-p-5'
  );
  return (
    <div className={className}>
      <Button {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
