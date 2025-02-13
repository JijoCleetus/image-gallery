// src/components/ImageGallery.js
import  { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'

const ImageGallery = () => {
  const env = import.meta.env;
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState({name:''});
  const client = createClient(env.VITE_SUPABASE_COMPANY_URL, env.VITE_SUPABSE_ANON_KEY)


  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const list = await client.storage.from('image-gallery').list('', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' }
    })
    setImages(list.data as []);
    Array.isArray(list.data) && setSelectedImage(list.data[0]);
  }

  const trimName=(name:string)=>{
    return name.split('.')[0]
  }




  return (
    <div className="grid gap-4" >
      <div>
        <img className=" h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[800px]"
          src={env.VITE_SUPABASE_BUCKET_URL + selectedImage?.name}
          alt="" />
      </div>
      <div className="grid grid-cols-5 gap-4">
       {
        images.map((image: any) => (
          <div key={image.id} onClick={()=>setSelectedImage(image)}>
          <img
            src={env.VITE_SUPABASE_BUCKET_URL + image.name}
            className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt={image.name} />
            <label>{trimName(image.name)}</label>
        </div>
        ))
       }
      </div>
    </div >

  );
};

export default ImageGallery;
