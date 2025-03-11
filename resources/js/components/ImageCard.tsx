import React from 'react'
import { Card, CardContent } from './ui/card'
import { EvervaultIcon } from './ui/evervault-icon'
interface imageProps{
    name?: string,
    image?: string
}
const ImageCard = ({image}: {image: imageProps}) => {
  return (
    <div>

<div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-auto">
      <EvervaultIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <EvervaultIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <EvervaultIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <EvervaultIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

    <img src={'storage/' + image.image} alt={image.name} />
    <p className="text-2xl border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        {image.name}
      </p>
    </div>
    </div>
  )
}

export default ImageCard
