// src/components/NavbarButtons.js
import React from 'react';

const NavbarButtons = () => {
  return (
    <div className="bg-white h-12 flex justify-center items-center">
      {['Home', 'Photos', 'Illustrations', 'Videos', 'About','SavedImages', 'MyProfile'].map((item, index) => (
        <button
          key={item}
          className={`bg-gray-300 text-gray-800 rounded-full px-4 py-1 hover:bg-gray-800 hover:text-white transition-colors duration-200 ${index !== 0 ? 'ml-2' : ''}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default NavbarButtons;
