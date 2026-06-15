'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://your-foodmood.onrender.com/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong processing your message.');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear fields
    } catch (err) {
      console.error('Contact submit crash:', err);
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className="w-full min-h-screen bg-brand-lightBg py-16 px-4 sm:px-8 font-sans flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-2 bg-brand-dark p-8 sm:p-12 text-white flex flex-col justify-between space-y-8 bg-neutral-900">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact Information</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Have questions about catering, private events, or our seasonal menus? Send a message directly.
            </p>
          </div>

          <div className="space-y-6 text-sm text-gray-300">
            <div className="flex items-center gap-4">
              <span className="text-lg">📞</span>
              <span>+977-1-4412345</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg">✉️</span>
              <span>hello@foodmood.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg">📍</span>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          <div className="text-xs text-gray-500 font-medium">
            © 2026 FoodMood Bistro. All rights reserved.
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:col-span-3 p-8 sm:p-12 space-y-6 flex flex-col justify-center">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-brand-dark tracking-tight">Send Us a Message</h1>
            <p className="text-xs text-brand-secondary">We typically respond within 24 operational hours.</p>
          </div>

          {status.success && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl text-center text-sm font-medium">
              🎉 Message delivered perfectly! Our team will contact you shortly.
            </div>
          )}

          {status.error && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl text-center text-sm font-medium">
              ❌ Submission Failed: {status.error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary text-sm transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary text-sm transition"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Catering Inquiry / Feedback"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary text-sm transition"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Message Description</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your details here (at least 10 characters)..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary text-sm transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className={`w-full font-bold text-black text-sm tracking-wide py-4 rounded-xl shadow-md  flex justify-center items-center gap-2 ${
              status.loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-primary hover:bg-opacity-95'
            }`}
          >
            {status.loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending Message...
              </>
            ) : (
              'Submit Inquiry'
            )}
          </button>
        </form>

      </div>
    </div>
  );
}