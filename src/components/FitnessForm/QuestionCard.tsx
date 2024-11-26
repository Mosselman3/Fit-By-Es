import React from 'react';
import { Label } from '../ui/label';
import { Icons } from '../icons';
import { RadioOption } from './RadioOption';
import { TextQuestion } from './TextQuestion';
import { ContactInfo } from './ContactInfo';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionCardProps {
  question: {
    id: number;
    text: string;
    type: 'text' | 'radio' | 'contact';
    required?: boolean;
    minLength?: number;
    options?: Array<{
      value: string;
      label: string;
      icon?: keyof typeof Icons;
    }>;
  };
  answer: any;
  error?: string | Record<string, string>;
  onAnswer: (answer: string) => void;
  onContactInfoChange?: (field: string, value: string) => void;
}

export function QuestionCard({ question, answer, error, onAnswer, onContactInfoChange }: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="min-h-[320px] px-4 sm:px-6"
      >
        <Label className="text-lg sm:text-xl font-medium text-gray-800 mb-6 block leading-relaxed">
          {question.text}
          {question.required && <span className="text-red-500 ml-1">*</span>}
        </Label>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-6"
        >
          {question.type === 'text' && (
            <>
              <TextQuestion 
                value={answer} 
                onChange={onAnswer}
                minLength={question.minLength}
              />
              {error && typeof error === 'string' && (
                <p className="text-red-500 text-sm mt-2 px-1">{error}</p>
              )}
            </>
          )}

          {question.type === 'radio' && (
            <>
              <div className="space-y-4">
                {question.options?.map((option, index) => (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <RadioOption
                      option={option}
                      isSelected={answer === option.value}
                      onSelect={() => onAnswer(option.value)}
                    />
                  </motion.div>
                ))}
              </div>
              {error && typeof error === 'string' && (
                <p className="text-red-500 text-sm mt-2 px-1">{error}</p>
              )}
            </>
          )}

          {question.type === 'contact' && onContactInfoChange && (
            <ContactInfo
              values={answer || {}}
              onChange={onContactInfoChange}
              errors={error as Record<string, string>}
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}