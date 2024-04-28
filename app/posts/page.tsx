import React from 'react'

import {posts} from "../../data"

import Post from "@/components/Post";

type Props = {}



function Posts({}: Props) {
  return (
    <div className="flex items-center justify-center m-4">

    <div className="grid md:grid-cols-3 gap-4 md:max-w-[80%]">
        {
          posts.map(({image, title, content,id})=>(
            <Post key={id} content={content} image={image} title={title} id={id} />
            ))
          }
    </div>
    </div>
  )
}

export default Posts