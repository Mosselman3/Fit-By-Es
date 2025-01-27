import React from 'react';
import PricingCard from './PricingCard';

const Services = () => {
    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Basic Plan */}
                    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col justify-between">
                        <h3 className="text-xl font-semibold mb-4">Basic</h3>
                        <p className="text-2xl font-bold mb-4">$99/month</p>
                        <ul className="mb-4">
                            <li>2 sessions per week</li>
                            <li>Basic nutrition guide</li>
                            <li>App access</li>
                            <li>Email support</li>
                        </ul>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-full">Get Started</button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-blue-100 border border-blue-300 rounded-lg shadow-lg p-6 relative flex flex-col justify-between">
                        <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">Most Popular</span>
                        <h3 className="text-xl font-semibold mb-4">Pro</h3>
                        <p className="text-2xl font-bold mb-4">$199/month</p>
                        <ul className="mb-4">
                            <li>3 sessions per week</li>
                            <li>Advanced nutrition plan</li>
                            <li>Priority app access</li>
                            <li>24/7 WhatsApp support</li>
                            <li>Monthly progress review</li>
                        </ul>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-full">Get Started</button>
                    </div>

                    {/* Elite Plan */}
                    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col justify-between">
                        <h3 className="text-xl font-semibold mb-4">Elite</h3>
                        <p className="text-2xl font-bold mb-4">$299/month</p>
                        <ul className="mb-4">
                            <li>5 sessions per week</li>
                            <li>Custom meal plans</li>
                            <li>VIP app access</li>
                            <li>Direct phone support</li>
                            <li>Weekly progress review</li>
                            <li>Recovery sessions</li>
                        </ul>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-full">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
