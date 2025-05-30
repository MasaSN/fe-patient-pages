import React from 'react';

const SettingsConfig = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Settings Configuration</h2>

      {/* Site Name */}
      <div className="flex flex-col mb-4">
        <label className="text-sm font-medium mb-1" htmlFor="siteName">Site Name</label>
        <input
          id="siteName"
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Idoctor"
        />
      </div>

      {/* Admin Email */}
      <div className="flex flex-col mb-4">
        <label className="text-sm font-medium mb-1" htmlFor="adminEmail">Admin Email</label>
        <input
          id="adminEmail"
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="AdminA@example.com"
        />
      </div>

      {/* Site Description */}
      <div className="flex flex-col mb-4">
        <label className="text-sm font-medium mb-1" htmlFor="siteDescription">Site Description</label>
        <textarea
          id="siteDescription"
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your site..."
          rows="3"
        />
      </div>

      {/* Enable Notifications */}
      <div className="flex items-center mb-4">
        <input
          id="notifications"
          className="mr-2"
          type="checkbox"
        />
        <label className="text-sm font-medium" htmlFor="notifications">Enable Notifications</label>
      </div>

      {/* Theme Selection */}
      <div className="flex flex-col mb-4">
        <label className="text-sm font-medium mb-1" htmlFor="themeSelection">Theme</label>
        <select
          id="themeSelection"
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsConfig;
