import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Card from '../components/Card';

function Prescriptions() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-blue-950">
      <Sidebar />
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6">
          {/* Header */}
          <h2 className="text-blue-900 font-bold text-xl flex items-center gap-2">
            <span className="text-2xl">💊</span> Prescriptions
          </h2>

          {/* Table */}
          <Card>
          <div className="mt-4">
            <table className="w-full table-auto text-gray-800">
              <thead>
                <tr className="text-left text-blue-900 border-b">
                  <th className="py-2 px-4">Medication</th>
                  <th className="py-2 px-4">Prescribed By</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Dosage</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b">
                  <td className="py-2 px-4">Amoxicillin</td>
                  <td className="py-2 px-4">Dr. Sarah Johnson</td>
                  <td className="py-2 px-4">2023-11-12</td>
                  <td className="py-2 px-4">500mg twice daily</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      View Details
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="py-2 px-4">Ibuprofen</td>
                  <td className="py-2 px-4">Dr. Emily Carter</td>
                  <td className="py-2 px-4">2023-10-20</td>
                  <td className="py-2 px-4">200mg as needed</td>
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
          
        </div>
      </div>
    </div>
  );
}

export default Prescriptions;
