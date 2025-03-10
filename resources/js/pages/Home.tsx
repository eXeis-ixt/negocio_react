import AboutComponent from '@/components/AboutComponent'
import { HeroSection } from '@/components/Hero'
import { CountdownTimer } from '@/components/Timer'
import BentoGrid from '@/components/bento'
import { Card } from '@/components/ui/card'
import Default from '@/layouts/Default'
import { Head } from '@inertiajs/react'
import { CheckCircle, Globe, TrendingUp, Video } from 'lucide-react'
import React from 'react'



const Home = () => {
  return (
    <div>
        <Head>
            <title>Home</title>
        </Head>
        <Default>

    <div>
    <HeroSection
      title="Welcome Communic"
      subtitle={{
        regular: "Transform your ideas into ",
        gradient: "beautiful digital experiences",
      }}
      description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
      ctaText="Get Started"
      ctaHref="/signup"


    />
    </div>

    <div className=' flex items-center justify-center'>
        <CountdownTimer />
    </div>

    <div>
        <AboutComponent />
    </div>

        </Default>
    </div>
  )
}

export default Home
