import React from 'react';
import { cn } from '../../lib/utils';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  isContact?: boolean;
}

export function Progress({ value, isContact = false, className, ...props }: ProgressProps) {
  return (
    <div
      className={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary/20', className)}
      {...props}
    >
      <div
        className={cn(
          'h-full w-full flex-1 transition-all',
          isContact ? 'bg-green-500' : 'bg-primary'
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
}