import React from 'react';
import { cn } from '../../lib/utils';

interface RadioOptionProps {
  option: {
    value: string;
    label: string;
    icon?: React.ReactNode;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export function RadioOption({ option, isSelected, onSelect }: RadioOptionProps) {
  return (
    <button
      type="button"
      className={cn(
        'w-full p-4 sm:p-5 rounded-lg border-2 transition-all',
        'flex items-center gap-3',
        'hover:border-primary/50 hover:shadow-md',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
        isSelected ? 
          'border-primary bg-primary text-white' : 
          'border-gray-200 text-gray-800'
      )}
      onClick={onSelect}
    >
      {option.icon && (
        <span className={cn(
          'flex-shrink-0 text-lg sm:text-xl',
          isSelected ? 'text-white' : 'text-primary'
        )}>
          {option.icon}
        </span>
      )}
      <span className="text-base sm:text-lg font-medium leading-relaxed">{option.label}</span>
    </button>
  );
}