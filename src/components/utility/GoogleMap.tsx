import { AspectRatio } from '@chakra-ui/layout';
import React from 'react';

type Props = {
  latitude: number,
  longitude: number,
}

const GoogleMap = ({ latitude, longitude }: Props) => {
  return (
    <AspectRatio ratio={[26/9]}>
      <iframe
        src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=eng;z%3D14&amp&output=embed`}
      />
    </AspectRatio>
  )
}

export default GoogleMap;