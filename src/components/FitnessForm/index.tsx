'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { QuestionCard } from './QuestionCard';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import CalendlyWidget from '../CalendlyWidget';

interface ContactInfo {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
}

interface Question {
  id: number;
  text: string;
  type: 'text' | 'radio' | 'contact';
  required?: boolean;
  minLength?: number;
  options?: Array<{
    value: string;
    label: string;
    icon?: string;
  }>;
}

interface ProgressProps {
  value: number;
  isContact?: boolean;
  className?: string;
}

interface QuestionCardProps {
  question: Question & {
    options?: Array<{
      value: string;
      label: string;
      icon?: string;
    }>;
  };
  answer: string | ContactInfo | undefined;
  error: string | Record<string, string> | undefined;
  onAnswer: (answer: string) => void;
  onContactInfoChange?: (field: keyof ContactInfo, value: string) => void;
}

// Type for the answers state
type AnswerType = Record<number, string | ContactInfo>;
// Type for the errors state
type ErrorType = Record<number | 'contact', string | Record<string, string>>;

export function FitnessForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerType>({});
  const [errors, setErrors] = useState<ErrorType>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const questions: Question[] = [
    {
      id: 1,
      text: 'How can I help?',
      type: 'radio',
      required: true,
      options: [
        { value: 'getting-fit', label: 'Get Fit & Improve Health', icon: '🏃' },
        { value: 'competition', label: 'Competition Coaching', icon: '🥇' },
        { value: 'weight-loss', label: 'Weight Loss', icon: '⚖️' },
        { value: 'build-muscle', label: 'Build Muscle', icon: '🏋️' }
      ]
    },
    ...(answers[1] === 'competition' ? [
      {
        id: 2,
        text: 'The type of sport event you train for?',
        type: 'radio' as const,
        required: true,
        options: [
          { value: 'swimming', label: 'Swimming', icon: '🏊‍♂️' },
          { value: 'running', label: 'Running', icon: '🏃‍♂️' },
          { value: 'cycling', label: 'Cycling', icon: '🚴‍♂️' },
          { value: 'triathlon', label: 'Triathlon', icon: '🏅' }
        ]
      },
      {
        id: 3,
        text: 'What is your goal?',
        type: 'radio' as const,
        required: true,
        options: [
          { value: 'total-time', label: 'Total Time Goal', icon: '⏱️' },
          { value: 'time-pace', label: 'Time Pace Goal', icon: '⚡' },
          { value: 'distance', label: 'Distance Goal', icon: '📏' }
        ]
      }
    ] : []),
    {
      id: 4,
      text: 'Your Gender?',
      type: 'radio' as const,
      required: true,
      options: [
        { value: 'male', label: 'Male', icon: '🏃' },
        { value: 'female', label: 'Female', icon: '🏃‍♀️' }
      ]
    },
    {
      id: 5,
      text: 'Your Age?',
      type: 'radio',
      required: true,
      options: [
        { value: '18-24', label: '18-24' },
        { value: '25-30', label: '25-30' },
        { value: '31+', label: '31+' }
      ]
    },
    {
      id: 6,
      text: 'Contact Information',
      type: 'contact',
      required: true
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const isContactForm = currentQ?.type === 'contact';

  const validateAnswer = (questionId: number, answer: string) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return '';

    if (question.required && !answer) {
      return 'This field is required';
    }

    if (question.type === 'text' && question.minLength && answer.length < question.minLength) {
      return `Please enter at least ${question.minLength} characters`;
    }

    return '';
  };

  const handleAnswer = (answer: string) => {
    const error = validateAnswer(currentQ.id, answer);
    setErrors((prev: ErrorType) => ({ ...prev, [currentQ.id]: error }));
    setAnswers((prev: AnswerType) => ({ ...prev, [currentQ.id]: answer }));

    console.log('Current Question ID:', currentQ.id);
    console.log('Selected Answer:', answer);

    if (currentQ.type === 'radio' && !error && currentQuestion < questions.length - 1) {
      setTimeout(() => {
        if (currentQ.id === 1) {
          if (answer === 'pregnancy') {
            setAnswers((prev: AnswerType) => ({ ...prev, 2: 'female' }));
            setCurrentQuestion(2);
          } else if (answer === 'competition') {
            setCurrentQuestion(1);
          } else {
            setCurrentQuestion((prev: number) => prev + 1);
          }
        } else {
          setCurrentQuestion((prev: number) => prev + 1);
        }
      }, 0);
    }
  };

  const handleContactInfo = (field: keyof ContactInfo, value: string) => {
    let error = '';
    if (!value) {
      error = 'This field is required';
    } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address';
    } else if (field === 'phone' && !/^\+?[\d\s-()]+$/.test(value)) {
      error = 'Please enter a valid phone number';
    }

    setErrors((prev: ErrorType) => ({
      ...prev,
      contact: { 
        ...(prev.contact as Record<string, string> || {}), 
        [field]: error 
      }
    }));

    setAnswers((prev: AnswerType) => {
      const prevContact = (prev.contact || {}) as ContactInfo;
      return {
        ...prev,
        contact: {
          ...prevContact,
          [field]: value
        }
      };
    });

    console.log('Updated contact field:', field, 'with value:', value);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev: number) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 2 && answers[1] === 'pregnancy') {
      setCurrentQuestion(1);
    } else {
      setCurrentQuestion((prev: number) => Math.max(0, prev - 1));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const contact = answers.contact as ContactInfo;
    const contactErrors: Record<string, string> = {};
    
    if (!contact?.title) contactErrors.title = 'This field is required';
    if (!contact?.firstName) contactErrors.firstName = 'This field is required';
    if (!contact?.lastName) contactErrors.lastName = 'This field is required';
    if (!contact?.email) contactErrors.email = 'This field is required';
    if (!contact?.phone) contactErrors.phone = 'This field is required';
    
    if (Object.keys(contactErrors).length > 0) {
      setErrors((prev: ErrorType) => ({
        ...prev,
        contact: contactErrors
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const contact = answers.contact as ContactInfo;
      const formValues = {
        'form-name': 'Contact Form',
        'service-type': answers[1]?.toString() || '',
        'sports-event': answers[2]?.toString() || '',
        'sports-goal': answers[3]?.toString() || '',
        'gender': answers[4]?.toString() || '',
        'age-range': answers[5]?.toString() || '',
        'title': contact?.title || '',
        'first-name': contact?.firstName || '',
        'last-name': contact?.lastName || '',
        'email': contact?.email || '',
        'phone': contact?.phone || '',
        'message': contact?.message || ''
      };

      console.log('Submitting form values:', formValues);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formValues).toString()
      });

      console.log('Form submission response:', response);

      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      setIsSubmitted(true);
      setShowCalendly(false);
      setAnswers({});
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors((prev: ErrorType) => ({
        ...prev,
        submit: 'Failed to submit form. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const isContactValid = () => {
    const contact = answers.contact || {};
    const contactErrors = errors.contact as Record<string, string> || {};
    return contact.title && contact.firstName && contact.lastName && contact.email && contact.phone &&
           !contactErrors.title && !contactErrors.firstName && !contactErrors.lastName && !contactErrors.email && !contactErrors.phone;
  };

  const canProceed = () => {
    if (!currentQ) return false;
    if (currentQ.type === 'contact') return isContactValid();
    return !!answers[currentQ.id] && !errors[currentQ.id];
  };

  if (!currentQ) return null;

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
        <p className="text-gray-700 mb-6">Just one more step to book your Free Fitness Assessment. Click below to schedule your call and take that first step!</p>
        <CalendlyWidget isVisible={true} />
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <input type="hidden" name="form-name" value="Contact Form" />
        
        <Progress value={progress} isContact={isContactForm} />
        
        <div className="space-y-8">
          <QuestionCard
            question={currentQ}
            answer={currentQ.type === 'contact' ? answers.contact : answers[currentQ.id]}
            error={currentQ.type === 'contact' ? errors.contact : errors[currentQ.id]}
            onAnswer={handleAnswer}
            onContactInfoChange={currentQ.type === 'contact' ? 
              ((field: string, value: string) => handleContactInfo(field as keyof ContactInfo, value)) : 
              undefined}
          />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pt-6 px-4 sm:px-6">
            {currentQuestion > 0 ? (
              <Button
                type="button"
                onClick={handlePrevious}
                variant="outline" 
                className="h-12 text-[#1F2937] bg-primary/25 hover:bg-primary/40 hover:text-[#1F2937] w-full sm:w-auto min-w-[120px]"
              >
                <div className="flex items-center justify-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-medium">Back</span>
                </div>
              </Button>
            ) : (
              <div className="hidden sm:block" />
            )}
            
            {currentQuestion < questions.length - 1 ? (
              <Button
                variant="button"
                disabled={!canProceed()}
                className="h-12 bg-primary-dark/90 shadow-md hover:bg-primary-dark text-[#1F2937] w-full sm:w-auto min-w-[120px] font-medium"
                onClick={handleNext}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>
            ) : null}

            {currentQuestion === questions.length - 1 ? (
              <Button 
                variant="submit"
                className="h-12 bg-primary-dark/90 shadow-md hover:bg-primary-dark text-[#1F2937] w-full sm:w-auto min-w-[120px] font-medium"
                disabled={!isContactValid() || isSubmitting}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                  <Send className="w-4 h-4" />
                </div>
              </Button>
            ) : null}
          </div>
        </div>
      </form>
      <CalendlyWidget isVisible={showCalendly} />
    </>
  );
}