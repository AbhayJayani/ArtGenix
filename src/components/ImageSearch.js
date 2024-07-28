import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='w-full max-w-sm'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input 
            onChange={e => setText(e.target.value)} 
            className="appearance-none bg-transparent border-none w-full text-white mr-5 py-1 px-2 leading-tight focus:outline-none" 
            type="text" 
            placeholder="Search Image Term..." 
          />
          <button 
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 mr-3 hover:border-teal-700 text-sm border-4 text-white py-1 px-4 rounded" 
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch;
