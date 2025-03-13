import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
}

export function VideoBackground({ src, poster }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.preload = 'metadata';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.preload = 'auto';
            video.play().catch(() => {
              console.log('Autoplay prevented');
            });
            observer.unobserve(video);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCanPlay = () => {
    setIsLoaded(true);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        poster={poster}
        onCanPlay={handleCanPlay}
      >
        <source
          src={src}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
