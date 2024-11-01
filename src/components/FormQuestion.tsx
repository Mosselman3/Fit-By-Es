import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';

interface QuestionProps {
  question: {
    id: number;
    text: string;
    type: 'text' | 'select' | 'radio';
    options?: string[];
  };
  onAnswer: (answer: string) => void;
  currentAnswer?: string;
}

export function FormQuestion({ question, onAnswer, currentAnswer }: QuestionProps) {
  return (
    <Card className="p-6">
      <Label htmlFor={`question-${question.id}`} className="text-lg font-medium mb-4 block">
        {question.text}
      </Label>
      
      {question.type === 'text' ? (
        <Input
          id={`question-${question.id}`}
          value={currentAnswer || ''}
          onChange={(e) => onAnswer(e.target.value)}
          className="w-full"
        />
      ) : (
        <div className="space-y-2">
          {question.options?.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="radio"
                id={`${question.id}-${option}`}
                name={`question-${question.id}`}
                value={option}
                checked={currentAnswer === option}
                onChange={(e) => onAnswer(e.target.value)}
                className="mr-2"
              />
              <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}