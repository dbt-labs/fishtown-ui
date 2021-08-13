import * as React from 'react';
import cx from 'classnames';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icon } from 'components/Icon/Icon';

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
  const classNames = cx(
    {
      'tw-py-1 tw-px-2': isSmall,
      'tw-py-2 tw-px-4': isMedium,
      'tw-py-4 tw-px-8': isLarge,
    },
    {
      'tw-bg-teal-500 tw-text-white hover:tw-bg-teal-700 disabled:tw-bg-gray-500': isSolidButton,
      'tw-text-teal-100 tw-border-teal-100': isOutlineButton,
      'tw-box-border tw-border hover:tw-border-2': isOutlineButton,
      'disabled:hover:tw-border disabled:tw-text-gray-500 disabled:tw-border-gray-500': isOutlineButton,
    },
    'tw-transition-colors',
    'tw-duration-200',
    'tw-font-bold',
    'tw-rounded',
    'tw-select-none',
    // Stateful styles
    'hover:tw-bg-teal-700',
    'disabled:tw-bg-gray-500',
    'disabled:tw-cursor-not-allowed',
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
      {icon && <Icon icon={icon}></Icon>}
      {children}
    </button>
  );
};
