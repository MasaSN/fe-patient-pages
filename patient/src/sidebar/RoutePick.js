import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiCalendar, FiClipboard, FiBookOpen, FiCreditCard, FiSettings,FiMessageSquare } from 'react-icons/fi';

const RoutePick = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Hook to get current location (path)

  const handleNavigation = (path) => {
    navigate(path);
  };

  const routes = [
    { path: '/', icon: <FiHome />, title: 'Personal Information' },
{ path: '/appointments', icon: <FiCalendar />, title: 'Appointments' },
{ path: '/lab-results', icon: <FiClipboard />, title: 'Lab Results' },
{ path: '/prescriptions', icon: <FiBookOpen />, title: 'Prescriptions' },
{ path: '/billing', icon: <FiCreditCard />, title: 'Billing' },
{ path: '/messages', icon: <FiMessageSquare />, title: 'Messages' },
{ path: '/settings', icon: <FiSettings />, title: 'Settings' },

  ];

  return (
    <div className="space-y-1">
      {routes.map((route) => (
        <Route
          key={route.path}
          Icon={route.icon}
          title={route.title}
          selected={location.pathname === route.path}  // Check if the route is selected
          onClick={() => handleNavigation(route.path)}  // Navigate to the route
        />
      ))}
    </div>
  );
};

const Route = ({ selected, Icon, title, onClick }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-all duration-200 ${
        selected
          ? 'bg-white text-stone-950 shadow-lg'
          : 'hover:bg-stone-200 hover:text-sky-950 bg-transparent text-white shadow-none'
      }`}
      onClick={onClick}
    >
      <div className={selected ? 'text-sky-950' : ''}>{Icon}</div>
      <span>{title}</span>
    </button>
  );
};

export default RoutePick;
