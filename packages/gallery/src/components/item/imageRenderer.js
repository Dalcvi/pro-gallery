import React from 'react';
import { PrintOnlyImageSource } from './printOnlySource';

const ImageRenderer = (props) => {
  if (typeof ImageRenderer.customImageRenderer === 'function') {
    return ImageRenderer.customImageRenderer(props);
  } else if (typeof props.src === 'string') {
    return <img alt={props.alt} {...props} />;
  } else if (typeof props.src === 'object') {
    return (
      <picture
        id={`multi_picture_${props.id}`}
        key={`multi_picture_${props.id}`}
      >
        {props.src.map((src) =>
          src.forPrinting ? (
            <PrintOnlyImageSource srcSet={src.dpr} type={`image/${src.type}`} />
          ) : (
            <source srcSet={src.dpr || src.url} type={`image/${src.type}`} />
          )
        )}
        <img
          alt={props.alt}
          {...props}
          src={props.src[props.src.length - 1].url}
        />
      </picture>
    );
  } else {
    return null;
  }
};

export default ImageRenderer;
