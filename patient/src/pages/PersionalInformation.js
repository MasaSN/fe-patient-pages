import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Card from '../components/Card';

function PersonalInformation() {
  return (
    
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-blue-950">
      <Sidebar />
      <div className="bg-white rounded-lg pb-4 shadow-lg h-auto">
        <div className="p-6">
          {/* Section Title */}
          <h2 className="text-blue-900 font-bold text-xl flex items-center gap-2">
            <span className="text-2xl">👤</span> Personal Information
          </h2>
            <Card>
            <div className="grid grid-cols-2 gap-y-3 mt-4 text-gray-800">
            <div>
              <p className="font-bold">Name:</p>
              <p>Fatima Hassan</p>
            </div>
            <div>
              <p className="font-bold">Email:</p>
              <p>fatima.hassan@example.com</p>
            </div>
            <div>
              <p className="font-bold">Phone:</p>
              <p>+90 555 123 4567</p>
            </div>
            <div>
              <p className="font-bold">Date of Birth:</p>
              <p>1961-05-12</p>
            </div>
            <div>
              <p className="font-bold">Gender:</p>
              <p>Female</p>
            </div>
            <div>
              <p className="font-bold">Blood Type:</p>
              <p>O+</p>
            </div>
            <div className="col-span-2">
              <p className="font-bold">Address:</p>
              <p>123 Main Street, Ankara, Turkey</p>
            </div>
          </div>
            </Card>
          {/* Personal Info Content */}
          

          {/* Edit Button */}
          <button className="mt-6 bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700">
            Edit Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
