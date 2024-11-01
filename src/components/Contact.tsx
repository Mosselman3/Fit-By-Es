import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader, CheckCircle, ClipboardList, Calendar } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check for visible elements on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate sending email
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2 second delay
        console.log('Form submitted:', formData);
        console.log('Email sent to: estrellawierikx@gmail.com');
        setIsSent(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } catch (error) {
        console.error('Error sending email:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary fade-in">Schedule Your Free Fitness Assessment</h2>
        
        <div className="max-w-3xl mx-auto mb-12 fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">Here's how it works:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2">1. Share Your Contact Info</h4>
              <p className="text-gray-600">So we can reach out.</p>
            </div>
            <div className="text-center fade-in">
              <ClipboardList className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2">2. Complete a Quick Survey</h4>
              <p className="text-gray-600">Tell us about your fitness level and goals.</p>
            </div>
            <div className="text-center fade-in">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2">3. Book Your Free Assessment</h4>
              <p className="text-gray-600">Work towards a personalised plan in our 1:1 session.</p>
            </div>
          </div>
        </div>
        
        <p className="text-center text-xl font-semibold mb-8 fade-in">Start transforming your fitness journey today!</p>

        {isSent ? (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center fade-in">
            <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon to schedule your free fitness assessment.</p>
          </div>
        ) : (
          <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md fade-in" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                <label htmlFor="firstName" className="block mb-2 font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="First name"
                  required
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label htmlFor="lastName" className="block mb-2 font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Last name"
                  required
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your email address"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your phone number"
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">
                Tell us about your fitness goals <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="What are your fitness goals? Any specific areas you want to focus on?"
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader className="animate-spin mr-2 h-5 w-5" />
                  Sending...
                </>
              ) : (
                <>
                  Schedule My Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;