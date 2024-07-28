import React from 'react';
import ImageSearch from './ImageSearch';
import backgroundImage from './img.jpg'; 
import profileImage from './profile.jpeg'; 

const Navbar = ({ searchText }) => {
  return (
    <nav
      className="relative bg-gray-800 p-4 top-0 z-50 mb-5"
      style={{
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="container mx-auto flex flex-col items-center justify-center h-full relative">
        <div className="absolute top-0 left-0 m-4">
          <h1 className="text-white font-bold font-serif" style={{ fontSize: '60px' }}>ArtGenix</h1>
        </div>
        <div className="absolute top-0 right-0 flex items-center m-4 cursor-pointer">
          <span className="text-white mr-2">Abhay Singh</span>
          <div
            className="w-10 h-10 rounded-full bg-cover bg-center mr-2"
            style={{
              backgroundImage: `url(${profileImage})`,
            }}
          ></div>
          <button className="bg-gray-500 text-white rounded-full px-4 py-1 hover:bg-gray-700 transition-colors duration-200">Upload</button>
        </div>
        <div className="w-full max-w-sm text-center mb-4">
          <h2 className="text-gray-300 font-extrabold text-lg">Stunning free stock photos for download</h2>
        </div>
        <div className="w-full max-w-sm border-2 border-white rounded p-2.5">
          <ImageSearch searchText={searchText} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
