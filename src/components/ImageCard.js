import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="bg-gray-300 max-w-sm rounded overflow-hidden shadow-lg relative">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center font-bold text-purple-500 text-xl mb-2">
          <span>Photo by {image.user}</span>
          <a
            href={image.largeImageURL}
            download="image.jpg"
            className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 transition-colors duration-200"
          >
            Download
          </a>
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
