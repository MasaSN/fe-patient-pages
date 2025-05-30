import React from "react";
 import {   FiSettings } from "react-icons/fi";
const LowerToggle = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
        <div>
        <Route Icon={FiSettings} selected={false} title="Settings" />
          
        </div>

        <button className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded">
          Log out
        </button>
      </div>
    </div>
  );
}
const Route = ({ selected, Icon, title }) => {
    return (
      <button
        className={`flex items-center justify-start gap-2 w-full rounded 
          px-1 py-1 text-white text-sm transition-[box-shadow,_background-color,_color] `}
      >
        <Icon  />
        <span>{title}</span>
      </button>
    );
  };
export default LowerToggle

