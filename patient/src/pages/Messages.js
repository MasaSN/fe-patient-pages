import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Card from '../components/Card';

function Messages() {
  const messages = [
    {
      id: 1,
      sender: "Dr. Ahmed Al-Masri",
      date: "2023-12-10",
      message: "Your lab results are ready. Please check the portal for more details.",
    },
    {
      id: 2,
      sender: "Clinic Admin",
      date: "2023-12-08",
      message: "Your next appointment with Dr. Leyla Özdemir has been confirmed.",
    },
  ];

  return (
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-blue-950">
      <Sidebar />
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <h2 className="text-blue-900 font-bold text-xl flex items-center gap-2">
          <span className="text-2xl">💬</span> Messages
        </h2>

        {/* Messages */}
        <Card>
        <div className="grid gap-4 mt-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-gray-100 p-4 rounded-lg shadow border border-gray-200"
            >
              {/* Sender and Date */}
              <div className="flex justify-between items-center">
                <h3 className="text-blue-900 font-bold">{msg.sender}</h3>
                <span className="text-gray-500 text-sm">{msg.date}</span>
              </div>

              {/* Message */}
              <p className="text-gray-800 mt-2">{msg.message}</p>

              {/* Actions */}
              <div className="mt-4 flex gap-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  View
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        </Card>
        
      </div>
    </div>
  );
}

export default Messages;
