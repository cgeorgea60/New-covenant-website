import React from 'react'

type Props = {
    params:{postid:string} ;
}

function PostDetails({params}: Props) {

  return (
    <div className="flex w-full  justify-center h-screen">

        <div className="flex md:max-w-[80%] w-full  p-4f md:p-6">

            <div className="w-full h-[20%]">

             <img className=" object-fill "
             src="https://cache.umusic.com/_sites/_halo/postmalone/harley/HDCollections_PMxHD_Presale_230723_1000x1000_1.jpg"/>

             </div>

        {/* PostDetails {params.postid} */}
        
        </div>
        </div>
  )
}

export default PostDetails