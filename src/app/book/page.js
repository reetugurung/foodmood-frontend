'use client';

import { useState } from 'react';

export default function BookTablePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://foodmood-oqel.onrender.com/apireservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong while booking.');
      }
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1
      });
    } catch (err) {
      console.error('Reservation submission error:', err);
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className="w-full min-h-screen bg-brand-lightBg py-16 px-4 sm:px-8 font-sans flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-8 sm:p-12 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold text-brand-dark tracking-tight">
            Book A Table
          </h1>
          <p className="text-brand-secondary text-sm sm:text-base leading-relaxed">
            Reserve your culinary experience ahead of time to avoid queues.
          </p>
        </div>
        {status.success && (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl text-center font-medium text-sm">
            🎉 Reservation confirmed! We look forward to serving you.
          </div>
        )}

        {status.error && (
          <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl text-center text-sm font-medium">
            ❌ Booking Failed: {status.error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex Mercer"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary text-sm transition"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Email</label>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact number"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary text-sm transition"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Total Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary text-sm transition appearance-none"
              >
                {[...Array(10)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1} {index + 1 === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary text-sm transition"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">Preferred Time</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary text-sm transition"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={status.loading}
            className={`w-full mt-4 font-bold text-black text-sm tracking-wide py-4 rounded-xl shadow-md transition transform active:scale-[0.99] flex justify-center items-center gap-2 ${
              status.loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-brand-primary hover:bg-opacity-95 shadow-brand-primary/20'
            }`}
          >
            {status.loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing Booking...
              </>
            ) : (
              'Complete Reservation'
            )}
          </button>

        </form>
      </div>
    </div>
  );
}