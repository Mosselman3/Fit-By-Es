import React, { useState } from 'react';
import { Input } from '../ui/input';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  prefix: string;
  flag: string;
}

const countries: Country[] = [
  { code: 'NL', name: 'Netherlands', prefix: '+31', flag: '🇳🇱' },
  { code: 'BE', name: 'Belgium', prefix: '+32', flag: '🇧🇪' },
  { code: 'DE', name: 'Germany', prefix: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', prefix: '+33', flag: '🇫🇷' },
  { code: 'GB', name: 'United Kingdom', prefix: '+44', flag: '🇬🇧' },
  { code: 'OT', name: 'Other', prefix: '', flag: '🌍' }
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function PhoneInput({ value, onChange, error }: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries.find(country => country.prefix === '+31') || countries[0]);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    const currentNumber = value.replace(/^\+\d+\s*/, '');
    onChange(`${country.prefix ? country.prefix + ' ' : ''}${currentNumber}`);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (!newValue.startsWith(selectedCountry.prefix)) {
      newValue = `${selectedCountry.prefix} ${newValue.replace(/^\+\d+\s*/, '')}`;
    }
    onChange(newValue);
  };

  return (
    <div className="relative">
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 py-1",
            "text-gray-800 hover:text-primary z-10",
            "transition-colors duration-200 ease-in-out",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          )}
        >
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        <Input
          type="tel"
          id="contact-phone"
          name="phone"
          value={value.startsWith(selectedCountry.prefix) ? value : `${selectedCountry.prefix} ${value}`}
          onChange={handlePhoneChange}
          className="pl-[5.5rem] pr-4 h-12 text-base"
          placeholder="Phone number"
          autoComplete="tel"
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="max-h-48 overflow-y-auto">
            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCountrySelect(country)}
                className={cn(
                  "w-full px-4 py-2 text-left flex items-center gap-3",
                  "hover:bg-gray-50 transition-colors duration-200 ease-in-out",
                  "text-gray-800 hover:text-primary",
                  "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary",
                  selectedCountry.code === country.code && "bg-primary/10 text-primary"
                )}
              >
                <span className="text-lg leading-none">{country.flag}</span>
                <span className="font-medium">{country.name}</span>
                <span className="text-gray-600 ml-auto">{country.prefix}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-2 px-1">{error}</p>
      )}
    </div>
  );
}