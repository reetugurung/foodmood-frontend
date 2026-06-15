'use client';

import { useState, useEffect } from 'react';
const API_BASE_URL = 'https://your-foodmood.onrender.com/api';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('reservations'); 
  const [reservations, setReservations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAdminData() {
      try {
        setLoading(true);
        setError(null);
        const [resResponse, msgResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/reservations`),
          fetch(`${API_BASE_URL}/contact`)
        ]);

        if (!resResponse.ok || !msgResponse.ok) {
          throw new Error('Failed to retrieve management data streams.');
        }

        const resData = await resResponse.json();
        const msgData = await msgResponse.json();

        setReservations(resData);
        setMessages(msgData);
      } catch (err) {
        console.error('Admin data fetch crash:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAdminData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Bistro Management Portal</h1>
            <p className="text-sm text-gray-500 mt-1">Monitor live table reservations and incoming customer inquiries.</p>
          </div>
          <div className="flex bg-gray-200 p-1 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('reservations')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeTab === 'reservations' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Reservations ({reservations.length})
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeTab === 'messages' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Customer Messages ({messages.length})
            </button>
          </div>
        </div>
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="w-10 h-10 border-4 border-neutral-900 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500 font-medium">Syncing administrative secure pipelines...</p>
          </div>
        )}
        {error && !loading && (
          <div className="max-w-md mx-auto bg-red-50 text-red-800 p-6 rounded-2xl text-center border border-red-100">
            <p className="font-bold text-sm">Portal Synchronicity Error</p>
            <p className="text-xs font-mono bg-white p-2 mt-2 rounded border border-red-100">{error}</p>
          </div>
        )}
        {!loading && !error && (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            {activeTab === 'reservations' && (
              <div className="overflow-x-auto">
                {reservations.length === 0 ? (
                  <div className="text-center py-16 text-gray-400 font-medium text-sm">No table bookings registered yet.</div>
                ) : (
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <th className="p-5">Guest Name</th>
                        <th className="p-5">Contact Details</th>
                        <th className="p-5">Schedule Date</th>
                        <th className="p-5">Time Slot</th>
                        <th className="p-5 text-center">Party Size</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                      {reservations.map((res) => (
                        <tr key={res._id} className="hover:bg-gray-50/70 transition">
                          <td className="p-5 font-semibold text-gray-900">{res.name}</td>
                          <td className="p-5">
                            <div className="text-xs text-gray-400">{res.email}</div>
                            <div className="font-medium">{res.phone}</div>
                          </td>
                          <td className="p-5 font-medium text-gray-600">
                            {new Date(res.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </td>
                          <td className="p-5">
                            <span className="bg-neutral-100 text-neutral-800 px-3 py-1 rounded-md text-xs font-bold">{res.time}</span>
                          </td>
                          <td className="p-5 text-center font-bold text-gray-900">{res.guests} Pax</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
            {activeTab === 'messages' && (
              <div className="divide-y divide-gray-100">
                {messages.length === 0 ? (
                  <div className="text-center py-16 text-gray-400 font-medium text-sm">Inbox clear! No feedback messages recorded.</div>
                ) : (
                  messages.map((msg) => (
                    <div key={msg._id} className="p-6 hover:bg-gray-50/70 transition space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-gray-900">{msg.name}</span>
                          <span className="text-xs text-gray-400 font-mono">({msg.email})</span>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">
                          {new Date(msg.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-brand-primary uppercase tracking-wide">{msg.subject}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-4xl bg-gray-50 p-3 rounded-xl border border-gray-100">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}