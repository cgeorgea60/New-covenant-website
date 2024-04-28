"use client"
import React from 'react'
import { useRouter } from 'next/navigation'



interface CardProps {
  image: string;
  title: string;
  content: string;
  id:number
}

function Post({ image, title, content,id }:CardProps) {
  const router = useRouter();

  return (
   
      <div key={id} onClick={() => router.push(`/posts/${id}`)} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
        <img className="w-full h-48 object-cover" src={image} alt="Post" />
        <div className="px-4 py-2">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600 line-clamp-2 ">{content}</p>
        </div>
      </div>
    );

}

export default Post
