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
  // If specified, the tab with a matching id is selected
  activeId?: string;
  isDisabled?: boolean;
}

const Tab: React.FC<TabParams> = ({ id, label, isDisabled, onClick, isSelected }) => {
  const classNames = cx(
    {
      'tw-border-teal-900 tw-text-teal-900': isSelected,
      'tw-border-transparent tw-text-gray-cool-700': !isSelected,
    },
    'tw-border-b-4',
    'tw-px-0.5',
    'tw-mx-2.5',
    'tw-py-3',
    'tw-font-medium',
    'tw-relative',
    'tw-box-border',
    'tw-transition-colors',
    'tw-duration-200',
    'hover:tw-text-teal-900',
    'focus:tw-outline-none',
    'tw-group' // For focus state
  );

  const textHorizontalPadding = 'tw-px-2.5';

  const visibleTextClassNames = cx(
    {
      'tw-border-gray-500 tw-text-gray-500': !isSelected && isDisabled,
      'tw-font-bold': isSelected,
      'tw-border-transparent tw-font-normal': !isSelected,
    },
    'tw-m-auto',
    'tw-text-center',
    // Focus state
    'tw-py-1',
    textHorizontalPadding,
    'tw-rounded-full',
    'group-focus:tw-bg-gray-cool-200'
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
      {/* We need to have hidden bold text to ensure the tabs never move on bold. */}
      <div
        aria-hidden="true"
        className={`tw-opacity-0 tw-h-px tw-font-bold ${textHorizontalPadding}`}
      >
        {label}
      </div>
      <div className={visibleTextClassNames}>{label}</div>
    </button>
  );
};

export const Tabs: React.FC<TabsProps> = ({
  activeId,
  isDisabled,
  tabs,
  ariaLabel,
}) => {
  const [currentIndex, setCurrentIndex] = useState(activeId || 0);

  React.useEffect(() => {
    const index = tabs.findIndex((tab) => tab.id === activeId);
    if (index > -1) {
      setCurrentIndex(index);
    }
  }, [activeId]);

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
