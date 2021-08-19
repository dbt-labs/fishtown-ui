import * as React from 'react';
import cx from 'classnames';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '../Icon';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  buttonStyle?: 'solid' | 'border-only';
  icon?: string | IconDefinition;
  isDisabled?: boolean;
  title?: string;
  className?: string;
  onClick?(): any;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  buttonStyle = 'solid',
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
  const isSolidButton = buttonStyle === 'solid';
  const isOutlineButton = buttonStyle === 'border-only';
  const isEnabledOutline = isOutlineButton && !isDisabled;
  const isDisabledOutline = isOutlineButton && isDisabled;
  const classNames = cx(
    {
      'tw-py-1 tw-px-2': isSmall,
      'tw-py-2 tw-px-4': isMedium,
      'tw-py-4 tw-px-8': isLarge,
    },
    {
      'tw-rounded': isSolidButton,
      'tw-bg-teal-900 tw-text-white': isSolidButton,
      // Stateful styles
      'hover:tw-bg-teal-500 disabled:tw-bg-gray-500': isSolidButton,
    },
    {
      'focus:outline-none focus:tw-ring-offset-2 focus:tw-ring-2': isOutlineButton,
      'focus:tw-ring-teal-900 dark:focus:tw-ring-active-600': isOutlineButton,
      'tw-shadow-sm': isOutlineButton,
      'tw-text-sm tw-rounded-md tw-border': isOutlineButton,
      'tw-border-gray-300 dark:tw-border-cool-gray-500': isOutlineButton,
      // Stateful styles
      'tw-text-cool-gray-600 dark:tw-text-cool-gray-300': isEnabledOutline,
      'tw-bg-white dark:tw-bg-gray-700': isEnabledOutline,
      'hover:tw-bg-cool-gray-100 dark:hover:tw-bg-cool-gray-500': isEnabledOutline,
      'active:tw-bg-cool-gray-100 dark:active:tw-bg-cool-gray-500': isEnabledOutline,
      'tw-bg-cool-gray-200 dark:tw-bg-transparent': isDisabledOutline,
      'tw-text-cool-gray-400 dark:tw-text-cool-gray-400': isDisabledOutline,
    },
    'tw-transition-colors',
    'tw-duration-200',
    'tw-font-bold',
    'tw-select-none',
    'tw-ring-offset-white dark:tw-ring-offset-black',
    // Stateful styles
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
      {icon && <Icon className={'tw-mr-1'} icon={icon}></Icon>}
      {children}
    </button>
  );
};
