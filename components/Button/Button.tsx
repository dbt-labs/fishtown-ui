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
      'tw-bg-teal-500 tw-text-white': isSolidButton,
      // Stateful styles
      'hover:tw-bg-teal-700 disabled:tw-bg-gray-500': isSolidButton,
    },
    {
      'tw-text-sm tw-rounded-md tw-box-border tw-border': isOutlineButton,
      // Stateful styles
      'tw-text-teal-800 tw-border-teal-800 tw-bg-teal-800': isEnabledOutline,
      'hover:tw-text-white focus:tw-text-white': isEnabledOutline,
      'tw-bg-opacity-0 hover:tw-bg-opacity-100 focus:tw-bg-opacity-100': isEnabledOutline,
      'tw-text-white tw-border-gray-500 tw-bg-gray-500': isDisabledOutline,
    },
    'tw-transition-colors',
    'tw-duration-200',
    'tw-font-bold',
    'tw-select-none',
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
