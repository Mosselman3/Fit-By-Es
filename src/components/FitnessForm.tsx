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
  const [showCalendly, setShowCalendly] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    if (questions[currentQuestion].type === 'select') {
      handleNext();
    }
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
    
    // Validate contact information
    const { name, email, phone, availability } = contactInfo;
    if (!name || !email || !phone || !availability) {
      alert('Please fill out all contact information fields');
      return;
    }

    // Validate other required answers
    const requiredQuestions = [1, 2, 3, 4]; // Service type, Gender, Age, Goals
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
    const question = questions[currentQuestion];

    if (question.type === 'contact') {
      return (
        <div className="space-y-4">
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

    if (question.type === 'text') {
      return (
        <div>
          <textarea
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full h-32 p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Please share your goals and what motivates you..."
            required
          />
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-4">
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
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Progress value={progress} className="mb-16" />
        <h3 className="text-lg font-medium text-center mb-8">{questions[currentQuestion].text}</h3>
        {renderQuestion()}
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
        )}
      </form>
    </div>
  );
}