import React from 'react';

interface TextQuestionProps {
  value: string;
  onChange: (value: string) => void;
}

export function TextQuestion({ value, onChange }: TextQuestionProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 resize-none text-gray-800 text-base leading-relaxed"
      placeholder="Anything you would like to share with me regarding your motivation, experience, desired fitness level or question you may have at this point...."
      rows={5}
    />
  );
}