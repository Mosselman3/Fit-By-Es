import React, { useState } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { cn } from '../lib/utils';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  type: 'text' | 'select' | 'radio' | 'contact';
  options?: Array<{
    text: string;
    icon?: React.ReactNode;
  }>;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'How can I help?',
    type: 'select',
    options: [
      { text: 'Weight Loss & Build Muscle' },
      { text: 'Healthy Lifestyle' },
      { text: 'Sports Competition Coaching' },
      { text: 'Post Pregnancy Recovery' }
    ]
  },
  {
    id: 2,
    text: 'Your Gender?',
    type: 'select',
    options: [
      { text: 'Male' },
      { text: 'Female' }
    ]
  },
  {
    id: 3,
    text: 'Your Age?',
    type: 'select',
    options: [
      { text: '18-24' },
      { text: '25-30' },
      { text: '31-40' },
      { text: '41+' }
    ]
  },
  {
    id: 4,
    text: 'Tell me about your specific goals and motivation?',
    type: 'text'
  },
  {
    id: 5,
    text: 'Schedule Your Free Fitness Assignment',
    type: 'contact'
  }
];

export function FitnessForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    availability: ''
  });

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ answers, contactInfo });
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];

    if (question.type === 'contact') {
      return (
        <div className="space-y-4 max-w-sm mx-auto">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={contactInfo.name}
              onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="availability">When are you available?</Label>
            <Input
              id="availability"
              value={contactInfo.availability}
              onChange={(e) => setContactInfo(prev => ({ ...prev, availability: e.target.value }))}
              className="w-full"
            />
          </div>
        </div>
      );
    }

    if (question.type === 'text') {
      return (
        <div className="max-w-sm mx-auto">
          <Input
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full"
          />
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
        {question.options?.map((option) => (
          <button
            key={option.text}
            onClick={() => {
              handleAnswer(question.id, option.text);
              handleNext();
            }}
            className={cn(
              'p-4 rounded-lg text-center transition-all',
              'bg-white hover:bg-primary hover:text-white',
              'border border-gray-200',
              answers[question.id] === option.text && 'bg-primary text-white'
            )}
          >
            <div className="flex items-center justify-center space-x-2">
              {option.icon}
              <span>{option.text}</span>
            </div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Progress value={progress} className="mb-6" />
        <h3 className="text-lg font-medium text-center mb-4">{questions[currentQuestion].text}</h3>
        {renderQuestion()}
        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          {currentQuestion === questions.length - 1 ? (
            <Button type="submit" className="flex items-center">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleNext}
              disabled={!answers[questions[currentQuestion].id]}
              className="flex items-center"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
}