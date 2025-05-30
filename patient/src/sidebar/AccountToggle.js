import React from 'react';


const AccountToggle = () => {
  return (
    <div className='border-b mb-4 mt-2 pb-4 border-stone-100 text-white'>
      <button className='flex p-0.5 hover:bg-stone-200 hover:text-sky-950 rounded 
      transition-colors relative gap-2 w-full items-center'>
        <img
          src="https://api.dicebear.com/9.x/personas/svg"
          alt="avatar"
          className='size-8 rounded shrink bg-slate-600 shadow'
        />
        <div className='text-start'>
          <span className="text-sm font-bold block text-inherit">Patient</span>
          <span className="text-xs block text-inherit">Patient@email.com</span>
        </div>
      </button>
    </div>
  );
};

export default AccountToggle;
