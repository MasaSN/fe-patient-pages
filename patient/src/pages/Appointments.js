import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Card from '../components/Card';

function Appointments() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-blue-950">
      <Sidebar />
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-blue-900 font-bold text-xl flex items-center gap-2">
            <span className="text-2xl">📅</span> Appointments
          </h2>

          {/* Table */}
          <Card>
          <div className="mt-4">
            <table className="w-full table-auto text-gray-800">
              <thead>
                <tr className="text-left text-blue-900 border-b">
                  <th className="py-2 px-4">Date & Time</th>
                  <th className="py-2 px-4">Doctor</th>
                  <th className="py-2 px-4">Department</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b">
                  <td className="py-2 px-4">2023-11-15 10:00 AM</td>
                  <td className="py-2 px-4">Dr. Ahmed Al-Masri</td>
                  <td className="py-2 px-4">Neurology</td>
                  <td className="py-2 px-4">Upcoming</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      Cancel
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="py-2 px-4">2023-10-20 02:00 PM</td>
                  <td className="py-2 px-4">Dr. Leyla Özdemir</td>
                  <td className="py-2 px-4">Cardiology</td>
                  <td className="py-2 px-4">Completed</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          </Card>
          
          {/* Book Appointment Button */}
          <button className="mt-6 bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700">
            Book New Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
