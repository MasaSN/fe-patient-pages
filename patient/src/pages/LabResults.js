import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Card from '../components/Card';

function LabResults() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-blue-950">
      <Sidebar />
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-blue-900 font-bold text-xl flex items-center gap-2">
            <span className="text-2xl">🧪</span> Lab Results
          </h2>

          {/* Table */}
          <Card>
          <div className="mt-4">
            <table className="w-full table-auto text-gray-800">
              <thead>
                <tr className="text-left text-blue-900 border-b">
                  <th className="py-2 px-4">Test Name</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Doctor</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b">
                  <td className="py-2 px-4">Blood Glucose Test</td>
                  <td className="py-2 px-4">2023-11-10</td>
                  <td className="py-2 px-4">Dr. Ali Yilmaz</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      View Result
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="py-2 px-4">MRI Scan</td>
                  <td className="py-2 px-4">2023-10-22</td>
                  <td className="py-2 px-4">Dr. Ahmed Al-Masri</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      View Result
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </Card>
          
        </div>
      </div>
    </div>
  );
}

export default LabResults;

