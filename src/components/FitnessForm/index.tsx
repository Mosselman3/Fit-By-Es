'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { QuestionCard } from './QuestionCard';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  availability: string;
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

const questions: Question[] = [
  {
    id: 1,
    text: 'How can I help?',
    type: 'radio',
    required: true,
    options: [
      { value: 'weight-muscle', label: 'Weight Loss & Build Muscle', icon: '💪' },
      { value: 'lifestyle', label: 'Healthy Lifestyle', icon: '🌱' },
      { value: 'sports', label: 'Sports Competition Coaching', icon: '🏆' },
      { value: 'pregnancy', label: 'Post Pregnancy Recovery', icon: '👶' }
    ]
  },
  {
    id: 2,
    text: 'Your Gender?',
    type: 'radio',
    required: true,
    options: [
      { value: 'male', label: 'Male', icon: '👨' },
      { value: 'female', label: 'Female', icon: '👩' }
    ]
  },
  {
    id: 3,
    text: 'Your Age?',
    type: 'radio',
    required: true,
    options: [
      { value: '18-24', label: '18-24' },
      { value: '25-30', label: '25-30' },
      { value: '31-40', label: '31-40' },
      { value: '41+', label: '41+' }
    ]
  },
  {
    id: 4,
    text: 'Tell me about your specific goals and motivation?',
    type: 'text',
    required: true,
    minLength: 10
  },
  {
    id: 5,
    text: 'Schedule Your Free Fitness Assessment',
    type: 'contact',
    required: true
  }
];

export function FitnessForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | ContactInfo>>({});
  const [errors, setErrors] = useState<Record<number | 'contact', string | Record<string, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setErrors((prev: Record<number | 'contact', string | Record<string, string>>) => ({ 
      ...prev, 
      [currentQ.id]: error 
    }));
    setAnswers((prev: Record<number, string | ContactInfo>) => ({ 
      ...prev, 
      [currentQ.id]: answer 
    }));

    if (currentQ.type === 'radio' && !error) {
      if (currentQ.id === 1 && answer === 'pregnancy') {
        setAnswers((prev: Record<number, string | ContactInfo>) => ({ 
          ...prev, 
          2: 'female' 
        }));
        setCurrentQuestion(2);
      } else if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev: number) => prev + 1);
      }
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

    setErrors((prev: Record<number | 'contact', string | Record<string, string>>) => ({
      ...prev,
      contact: { ...(prev.contact as Record<string, string> || {}), [field]: error }
    }));

    setAnswers((prev: Record<number, string | ContactInfo>) => ({
      ...prev,
      contact: { ...(prev.contact as ContactInfo || {}), [field]: value }
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 2 && answers[1] === 'pregnancy') {
      setCurrentQuestion(1);
    } else {
      setCurrentQuestion(prev => Math.max(0, prev - 1));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contact = answers.contact as ContactInfo;
      const formValues = {
        'form-name': 'Contact Form',
        'service-type': answers[1]?.toString() || '',
        'gender': answers[2]?.toString() || '',
        'age-range': answers[3]?.toString() || '',
        'goals': answers[4]?.toString() || '',
        'name': contact?.name || '',
        'email': contact?.email || '',
        'phone': contact?.phone || '',
        'availability': contact?.availability || ''
      };

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formValues).toString()
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      setIsSubmitted(true);
      setAnswers({});
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors(prev => ({
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
    return contact.name && contact.email && contact.phone && contact.availability &&
           !contactErrors.name && !contactErrors.email && !contactErrors.phone && !contactErrors.availability;
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
        <p className="text-gray-700">Your fitness assessment request has been submitted successfully. We'll contact you soon to schedule your session.</p>
      </div>
    );
  }

  return (
    <>
      <form name="Contact Form" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="Contact Form" />
        <input type="text" name="service-type" />
        <input type="text" name="gender" />
        <input type="text" name="age-range" />
        <input type="text" name="goals" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="availability" />
      </form>

      <form 
        method="POST"
        name="Contact Form"
        data-netlify="true"
        className="w-full max-w-2xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        
        <Progress value={progress} isContact={isContactForm} className="mb-8" />
        
        <div className="space-y-8">
          <QuestionCard
            question={currentQ}
            answer={currentQ.type === 'contact' ? answers.contact : answers[currentQ.id]}
            error={currentQ.type === 'contact' ? errors.contact : errors[currentQ.id]}
            onAnswer={handleAnswer}
            onContactInfoChange={currentQ.type === 'contact' ? handleContactInfo : undefined}
          />

          <div className="flex justify-between items-center pt-6 px-4 sm:px-6">
            {currentQuestion > 0 ? (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="h-12 text-primary border-primary hover:bg-primary/10 min-w-[120px]"
              >
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-medium">Back</span>
                </div>
              </Button>
            ) : (
              <div />
            )}
            
            {currentQuestion === questions.length - 1 ? (
              <Button 
                type="submit" 
                className="h-12 bg-primary hover:bg-primary-dark text-white min-w-[120px]"
                disabled={!isContactValid() || isSubmitting}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                  <Send className="w-4 h-4" />
                </div>
              </Button>
            ) : (
              currentQ.type !== 'radio' && (
                <Button
                  type="button"
                  disabled={!canProceed()}
                  className="h-12 bg-primary hover:bg-primary-dark text-white min-w-[120px]"
                  onClick={handleNext}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Button>
              )
            )}
          </div>
        </div>
      </form>
    </>
  );
}