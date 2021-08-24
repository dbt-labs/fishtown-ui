import * as React from 'react';
import cx from 'classnames';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '../Icon';

export interface ButtonProps {
  // TODO: Make sizing and names consistent with Tailwind Sizes
  size?: 'small' | 'medium' | 'large';
  buttonStyle?: 'primary' | 'secondary';
  icon?: string | IconDefinition;
  isDisabled?: boolean;
  title?: string;
  className?: string;
  onClick?(): any;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  buttonStyle = 'primary',
  icon,
  isDisabled,
  title,
  className,
  children,
  ...props
}) => {
  const isSmall = size === 'small';
  const isMedium = size === 'medium';
  const isLarge = size === 'large';
  const isSolidButton = buttonStyle === 'primary';
  const isOutlineButton = buttonStyle === 'secondary';
  const isEnabledOutline = isOutlineButton && !isDisabled;
  const isDisabledOutline = isOutlineButton && isDisabled;
  const classNames = cx(
    {
      'tw-py-1 tw-px-2.5': isSmall,
      'tw-py-2 tw-px-4': isMedium,
      'tw-py-4 tw-px-8': isLarge,
    },
    {
      'tw-bg-teal-900 tw-text-white': isSolidButton,
      // Stateful styles
      'hover:tw-bg-teal-500 disabled:tw-bg-gray-500': isSolidButton,
    },
    {
      'tw-shadow-sm': isOutlineButton,
      'tw-text-sm tw-border': isOutlineButton,
      'tw-border-gray-300 dark:tw-border-cool-gray-500': isOutlineButton,
      // Stateful styles
      'dark:focus:tw-ring-active-600': isOutlineButton,
      'tw-text-cool-gray-600 dark:tw-text-cool-gray-300': isEnabledOutline,
      'tw-bg-white dark:tw-bg-gray-700': isEnabledOutline,
      'hover:tw-bg-cool-gray-100 dark:hover:tw-bg-cool-gray-500': isEnabledOutline,
      'active:tw-bg-cool-gray-100 dark:active:tw-bg-cool-gray-500': isEnabledOutline,
      'tw-bg-cool-gray-200 dark:tw-bg-transparent': isDisabledOutline,
      'tw-text-cool-gray-400 dark:tw-text-cool-gray-400': isDisabledOutline,
    },
    'tw-rounded-md',
    'tw-transition-colors',
    'tw-duration-200',
    'tw-font-bold',
    'tw-select-none',
    'tw-ring-offset-white dark:tw-ring-offset-black',
    // Stateful styles
    'focus:tw-outline-none focus:tw-ring-offset-2 focus:tw-ring-2',
    'focus:tw-ring-teal-900',
    {
      'tw-cursor-not-allowed': isDisabled,
    },
    className
  );

  return (
    <button
      title={title}
      disabled={isDisabled}
      type="button"
      className={classNames}
      {...props}
    >
      {icon && <Icon className={'tw-mr-2'} icon={icon}></Icon>}
      <span>{children}</span>
    </button>
  );
};
