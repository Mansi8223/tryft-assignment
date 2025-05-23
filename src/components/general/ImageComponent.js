import Image from 'next/image'
import React from 'react'

function ImageComponent({
    style = {},
    width,
    height,
    className = "",
    src,
    alt = "",
    priority = false,
    onClick,}) {
  return (
    <Image
    //   ref={ref}
    //   loader={contentfulLoader}
      style={style}
      width={width}
      height={height}
      className={`${className}`}
      src={src}
      alt={alt}
      priority={priority}
    //   sizes={sizes}
    //   srcSet={srcSet}
      onClick={onClick}
    />
  )
}

export default ImageComponent