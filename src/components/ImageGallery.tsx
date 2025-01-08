// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'


const ImageGallery = () => {
  const env =import.meta.env;
  const bucketUrl = 'https://mrmpvkbfmfmlktsinzvn.supabase.co/storage/v1/object/public/image-gallery/'
  const [images, setImages] = useState([]);
  const client = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABSE_ANON_KEY)


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
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {
        images.map((image: any) => (
          <div key={image.id} className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={bucketUrl + image.name} alt={image.name} />
          </div>
        )
        )
      }
    </div>

  );
};

export default ImageGallery;
