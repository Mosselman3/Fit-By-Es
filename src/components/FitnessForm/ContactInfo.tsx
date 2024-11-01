'use client';

import { Input } from '../ui/input';
import { PhoneInput } from './PhoneInput';

interface ContactInfoProps {
  values: {
    name?: string;
    email?: string;
    phone?: string;
    availability?: string;
  };
  errors?: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function ContactInfo({ values, errors, onChange }: ContactInfoProps) {
  const fields = [
    { 
      name: 'name',
      id: 'contact-name',
      icon: '👤',
      placeholder: 'First and Last name',
      type: 'text'
    },
    {
      name: 'email',
      id: 'contact-email',
      icon: '📧',
      placeholder: 'Email address',
      type: 'email'
    },
    {
      name: 'availability',
      id: 'contact-availability',
      icon: '📅',
      placeholder: 'When are you available?',
      type: 'text'
    },
  ];
  return (
    <div className="space-y-5">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xl">
              {field.icon}
            </div>
            <Input
              type={field.type}
              id={field.id}
              name={field.name}
              value={values[field.name as keyof typeof values] || ''}
              onChange={(e) => onChange(field.name, e.target.value)}
              className="pl-12 h-12 text-base text-gray-800"
              placeholder={field.placeholder}
              autoComplete={field.type === 'email' ? 'email' : field.name === 'name' ? 'name' : 'off'}
            />
          </div>
          {errors?.[field.name] && (
            <p className="text-red-500 text-sm px-1">{errors[field.name]}</p>
          )}
        </div>
      ))}

      <div className="space-y-2">
        <PhoneInput
          value={values.phone || ''}
          onChange={(value) => onChange('phone', value)}
          error={errors?.phone}
        />
      </div>
    </div>
  );
}