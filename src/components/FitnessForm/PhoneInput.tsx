import React, { useState, useEffect, useMemo } from 'react';
import { Input } from '../ui/input';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

interface Country {
  code: string;
  name: string;
  flag: string;
}

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

// Function to get flag emoji from country code
const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export function PhoneInput({ value, onChange, error }: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [isValid, setIsValid] = useState(true);

  // Get all supported regions and create country list
  const countries = useMemo(() => {
    const regions = phoneUtil.getSupportedRegions();
    return Array.from(regions)
      .map(code => ({
        code,
        name: new Intl.DisplayNames(['en'], { type: 'region' }).of(code) || code,
        flag: getFlagEmoji(code)
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const [selectedCountry, setSelectedCountry] = useState(() => {
    // Try to detect the user's country from the current value
    try {
      if (value) {
        const parsed = phoneUtil.parse(value);
        const regionCode = phoneUtil.getRegionCodeForNumber(parsed);
        const country = countries.find(c => c.code === regionCode);
        if (country) return country;
      }
    } catch (e) {
      // Ignore parsing errors
    }
    // Default to first country if we can't detect
    return countries[0];
  });

  useEffect(() => {
    try {
      const phoneNumber = phoneUtil.parse(value, selectedCountry.code);
      const formattedNumber = phoneUtil.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL);
      setLocalValue(formattedNumber);
      setIsValid(phoneUtil.isValidNumber(phoneNumber));
    } catch (e) {
      setLocalValue(value);
      setIsValid(false);
    }
  }, [value, selectedCountry]);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    try {
      const phoneNumber = phoneUtil.parse(localValue, country.code);
      const formattedNumber = phoneUtil.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL);
      onChange(formattedNumber);
    } catch (e) {
      onChange(localValue);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    
    try {
      const phoneNumber = phoneUtil.parse(newValue, selectedCountry.code);
      if (phoneUtil.isValidNumber(phoneNumber)) {
        const formattedNumber = phoneUtil.format(phoneNumber, PhoneNumberFormat.INTERNATIONAL);
        onChange(formattedNumber);
        setIsValid(true);
      } else {
        onChange(newValue);
        setIsValid(false);
      }
    } catch (e) {
      onChange(newValue);
      setIsValid(false);
    }
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
          value={localValue}
          onChange={handlePhoneChange}
          className={cn(
            "pl-[5.5rem] pr-4 h-12 text-base",
            !isValid && "border-red-500 focus:ring-red-500"
          )}
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
                <span className="text-gray-600 ml-auto">
                  {(() => {
                    try {
                      const example = phoneUtil.getExampleNumber(country.code);
                      return phoneUtil.format(example, PhoneNumberFormat.INTERNATIONAL);
                    } catch {
                      return '';
                    }
                  })()}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
