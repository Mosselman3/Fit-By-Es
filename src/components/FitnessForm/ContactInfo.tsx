'use client';

import { Input } from '../ui/input';
import { CustomPhoneInput } from './PhoneInput';
import { Textarea } from '../ui/textarea';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

interface ContactInfoProps {
  values: {
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  errors?: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function ContactInfo({ values, errors, onChange }: ContactInfoProps) {
  return (
    <div className="space-y-4 w-full max-w-3xl mx-auto">
      <div className="pl-4">
        <RadioGroup
          value={values.title}
          onValueChange={(value) => onChange('title', value)}
          className="flex justify-start items-center w-full"
        >
          <div className="inline-flex items-center">
            <RadioGroupItem value="mr" id="title-mr" className="mr-2" />
            <Label htmlFor="title-mr" className="cursor-pointer mr-8">Mr.</Label>
          </div>
          <div className="inline-flex items-center">
            <RadioGroupItem value="mrs" id="title-mrs" className="mr-2" />
            <Label htmlFor="title-mrs" className="cursor-pointer">Mrs.</Label>
          </div>
        </RadioGroup>
        {errors?.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            value={values.firstName || ''}
            onChange={(e) => onChange('firstName', e.target.value)}
            className="h-12 text-base text-gray-800 w-full px-4"
            placeholder="First name"
            autoComplete="given-name"
          />
          {errors?.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            value={values.lastName || ''}
            onChange={(e) => onChange('lastName', e.target.value)}
            className="h-12 text-base text-gray-800 w-full px-4"
            placeholder="Last name"
            autoComplete="family-name"
          />
          {errors?.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email || ''}
            onChange={(e) => onChange('email', e.target.value)}
            className="h-12 text-base text-gray-800 w-full px-4"
            placeholder="Email address"
            autoComplete="email"
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <CustomPhoneInput
            value={values.phone || ''}
            onChange={(value) => onChange('phone', value || '')}
            error={errors?.phone}
          />
        </div>
      </div>

      <div className="mt-2">
        <Textarea
          id="message"
          name="message"
          value={values.message || ''}
          onChange={(e) => onChange('message', e.target.value)}
          className="min-h-[120px] text-base text-gray-800 w-full resize-y px-4 py-3"
          placeholder="Anything you would like to share with me regarding your motivation, experience, desired fitness level or any questions you may have at this point..."
        />
      </div>
    </div>
  );
}