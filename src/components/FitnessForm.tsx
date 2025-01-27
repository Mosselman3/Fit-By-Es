import React, { useState } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { cn } from '../lib/utils';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import CalendlyWidget from './CalendlyWidget';

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
      { text: 'Weight Loss' },
      { text: 'Build Muscle' },
      { text: 'Sports Competition Coaching' },
      { text: 'Pregnancy Recovery' }
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
    text: 'How often do you exercise per week?',
    type: 'select',
    options: [
      { text: 'Hardly ever (0-1 times)', icon: '🛋️' },
      { text: 'Moderately (2-4 times)', icon: '🏃' },
      { text: 'Very Active (5+ times)', icon: '💪' }
    ]
  },
  {
    id: 5,
    text: 'Tell me about your specific goals and motivation?',
    type: 'text'
  },
  {
    id: 6,
    text: 'Schedule Your Free Fitness Assignment',
    type: 'contact'
  }
];

export function FitnessForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    availability: ''
  });
  const [showCalendly, setShowCalendly] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const getVisibleQuestions = () => {
    let visibleQuestions = [...questions];
    
    // If question 1 is answered with 'Sports Competition Coaching', skip the fitness level question
    if (answers[1] === 'Sports Competition Coaching') {
      visibleQuestions = visibleQuestions.filter(q => q.id !== 4);
    }
    
    return visibleQuestions;
  };

  const currentQuestion = getVisibleQuestions()[currentQuestionIndex];

  const progress = ((currentQuestionIndex + 1) / getVisibleQuestions().length) * 100;

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    if (currentQuestion.type === 'select') {
      handleNext();
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < getVisibleQuestions().length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate contact information
    const { name, email, phone, availability } = contactInfo;
    if (!name || !email || !phone || !availability) {
      alert('Please fill out all contact information fields');
      return;
    }

    // Validate other required answers
    const requiredQuestions = [1, 2, 3, 5]; // Service type, Gender, Age, Goals
    const missingAnswers = requiredQuestions.filter(
      questionId => !answers[questionId]
    );

    if (missingAnswers.length > 0) {
      alert('Please answer all questions before submitting');
      return;
    }

    // Handle form submission
    console.log('Form Submission Data:', { answers, contactInfo });
    setFormSubmitted(true);
  };

  const renderQuestion = () => {
    if (currentQuestion.type === 'contact') {
      return (
        <div className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={contactInfo.name}
              onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
              className="w-full"
              required
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
              required
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
              required
            />
          </div>
          <div>
            <Label htmlFor="availability">When are you available?</Label>
            <Input
              id="availability"
              value={contactInfo.availability}
              onChange={(e) => setContactInfo(prev => ({ ...prev, availability: e.target.value }))}
              className="w-full"
              required
              placeholder="e.g., Weekday mornings, Weekend afternoons"
            />
          </div>
        </div>
      );
    }

    if (currentQuestion.type === 'text') {
      return (
        <div>
          <textarea
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
            className="w-full h-40 p-4 text-lg border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Please share your goals and what motivates you..."
            required
          />
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-6">
        {currentQuestion.options?.map((option) => (
          <button
            key={option.text}
            onClick={() => {
              handleAnswer(currentQuestion.id, option.text);
              handleNext();
            }}
            className={cn(
              'p-6 rounded-lg text-center transition-all text-lg',
              'bg-white hover:bg-primary hover:text-white',
              'border border-gray-200',
              answers[currentQuestion.id] === option.text && 'bg-primary text-white'
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
    <div className="w-full max-w-md mx-auto rounded-lg bg-white p-8 shadow-lg sm:p-12">
      <form onSubmit={handleSubmit} className="space-y-8">
        <Progress value={progress} className="w-full" />
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">{currentQuestion.text}</h2>
          {renderQuestion()}
        </div>
        {formSubmitted ? (
          <div className="mt-6 space-y-6">
            <div className="text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto animate-fade-in" />
              <h3 className="text-2xl font-semibold text-gray-900">You're All Set!</h3>
              <p className="text-gray-600">
                Your Free Fitness Assessment is just one step away. Click below to schedule your call and take that first step towards your fitness goals!
Everything up-to-date
              </p>
            </div>
            <CalendlyWidget 
              isVisible={true}
              prefillData={contactInfo} 
              answers={answers}
              autoTrigger={true}
              className="w-full"
            />
          </div>
        ) : (
          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            {currentQuestionIndex === getVisibleQuestions().length - 1 ? (
              <Button type="submit" className="flex items-center">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className="flex items-center"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}