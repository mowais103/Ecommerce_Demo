import {useEffect, useState} from 'react';
import {Image} from 'react-native';

const useImageAspectRatio = (imageUrl: string) => {
  // Setting default aspect ratio to be 2.75
  const [aspectRatio, setAspectRatio] = useState(2.75);

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    let isValid = true;
    Image.getSize(
      imageUrl,
      (width, height) => {
        if (isValid) {
          setAspectRatio(Math.min(width / height));
        }
      },
      error => {
        console.log('error:', error);
      },
    );

    return () => {
      isValid = false;
    };
  }, [imageUrl]);

  return aspectRatio;
};

export {useImageAspectRatio};