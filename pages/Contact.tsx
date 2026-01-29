
import React, { useState } from 'react';
import { CONTACT_PHONE, OFFICE_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h1>
          <p className="text-slate-600">Connect with our export division for quotations and technical queries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8 text-slate-900">Corporate Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    📍
                  </div>
                  <div>
                    <div className="font-bold text-slate-700">Office Address</div>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="font-bold text-slate-700">Contact Number</div>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">{CONTACT_PHONE}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    ✉️
                  </div>
                  <div>
                    <div className="font-bold text-slate-700">Export Inquiry</div>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">exports@savitaglobal.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Export Office Hours</h3>
              <p className="text-blue-100 text-sm mb-6">Our team is available to assist international clients across all time zones.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Fri</span>
                  <span className="font-bold">09:00 AM - 08:00 PM (IST)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span className="font-bold">10:00 AM - 04:00 PM (IST)</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-blue-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">✅</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h2>
                <p className="text-slate-500">Our export executive will contact you shortly with the requested information.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input required className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Company Name</label>
                    <input required className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Acme Corp" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input required type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Country</label>
                    <input required className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="United States" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Requirement Details</label>
                  <textarea required className="w-full border border-gray-200 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Tell us about your machinery or component requirements..."></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
                  Submit Export Inquiry
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-wider mt-4">
                  By submitting, you agree to our privacy policy and international trade terms.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
