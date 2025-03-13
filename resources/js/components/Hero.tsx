import React from 'react'
import { VideoBackground } from './VideoBackground'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from '@inertiajs/react'

interface HeroProps{
    title?: string,
    desc?: string
}

const Hero = ({title, desc}: HeroProps) => {
  return (
    <div>
        <div className="relative min-h-screen">
      <VideoBackground
        src="/video/negocio.mp4"
        poster="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1920&fit=crop"
      />



      {/* Hero Content */}
      <div className="relative  z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mt-0 md:mt-24 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to
            <span className="text-green-400"> {title} </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            {desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link href={route('team.register')} prefetch>
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
           </Link>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
