import * as React from 'react';
import cx from 'classnames';
import { Icon } from '../Icon';
import { useState } from 'react';

export interface TabProps {
  contents: string;
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

const Tab: React.FC<TabParams> = ({ contents, isDisabled, onClick, isSelected }) => {
  const classNames = cx(
    'tw-px-2.5',
    'tw-py-4',
    'tw-box-border',
    'tw-border-teal-800',
    'tw-text-teal-800',
    'tw-font-medium',
    'tw-relative'
  );

  const visibleTextClassNames = cx(
    {
      'tw-border-b-4': isSelected,
      'tw-font-medium': isSelected,
      'tw-font-extralight': !isSelected,
    },
    'tw-text-center',
    'tw-absolute',
    'tw-inset-0',
    'tw-leading-10'
  );
  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={isDisabled || isSelected}
      role="tab"
    >
      <div aria-hidden="true" className={'tw-opacity-0'}>
        {contents}
      </div>
      <div className={visibleTextClassNames}>{contents}</div>
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
