import * as React from 'react';
import cx from 'classnames';
import { useState } from 'react';

export interface TabProps {
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
  // This id should be used as aria-labelledby on a role="tabpanel"
  // to let screenreaders link content to tab.
  id?: string;
  label: string;
  isDisabled?: boolean;
  onClick?(): any;
}

type TabParams = TabProps & {
  isSelected: boolean;
};

export interface TabsProps {
  tabs: TabProps[];
  ariaLabel: string;
  isDisabled?: boolean;
}

const Tab: React.FC<TabParams> = ({ id, label, isDisabled, onClick, isSelected }) => {
  const yPadding = 'tw-py-4';

  const classNames = cx(
    'tw-px-3',
    'tw-mx-2.5',
    yPadding,
    'tw-text-teal-800',
    'tw-font-medium',
    'tw-relative',
    'tw-box-border'
  );

  const visibleTextClassNames = cx(
    {
      'tw-border-gray-500 tw-text-gray-500': isDisabled,
      'tw-border-b-4 tw-border-teal-800': isSelected,
      'tw-font-bold': isSelected,
      'tw-border-transparent tw-font-normal': !isSelected,
    },
    'tw-transition-colors',
    'tw-duration-200',
    'tw-m-auto',
    'tw-text-center',
    'tw-absolute',
    'tw-inset-0',
    yPadding
  );
  return (
    <button
      className={classNames}
      onClick={onClick}
      role="tab"
      id={id}
      // A user should still be able to focus on the current tab
      // to learn its name even though it's disabled.
      tabIndex={0}
      disabled={isDisabled}
      aria-selected={isSelected}
    >
      <div aria-hidden="true" className={'tw-opacity-0'}>
        {label}
      </div>
      <div className={visibleTextClassNames}>{label}</div>
    </button>
  );
};

export const Tabs: React.FC<TabsProps> = ({ isDisabled, tabs, ariaLabel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!tabs) return null;
  return (
    <div role="tablist" aria-label={ariaLabel}>
      {tabs.map((tab, index) => (
        <Tab
          {...tab}
          onClick={() => {
            setCurrentIndex(index);
            tab.onClick && tab.onClick();
          }}
          isSelected={index === currentIndex}
          isDisabled={isDisabled || tab.isDisabled}
        ></Tab>
      ))}
    </div>
  );
};
