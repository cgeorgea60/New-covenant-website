import React from 'react'

interface CardProps {
  imageUrl: string;
  title: string;
  summary: string;
}

function Post({ imageUrl, title, summary }:CardProps) {
  return (
   
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
        <img className="w-full h-48 object-cover" src={imageUrl} alt="Post" />
        <div className="px-4 py-2">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600">{summary}</p>
        </div>
      </div>
    );

}

export default Post
