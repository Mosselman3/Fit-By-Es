import React from 'react';

interface TextQuestionProps {
  value: string;
  onChange: (value: string) => void;
  minLength?: number;
}

export function TextQuestion({ value, onChange, minLength }: TextQuestionProps) {
  return (
    <textarea
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className="w-full min-h-[120px] p-4 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 resize-none text-gray-800 text-base leading-relaxed"
      placeholder="Share your goals and what motivates you..."
      minLength={minLength}
    />
  );
}