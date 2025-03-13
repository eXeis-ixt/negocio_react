import AboutComponent from '@/components/AboutComponent'
import { BentoGrid } from '@/components/BentoGrid'
import Hero from '@/components/Hero'
// import { HeroSection } from '@/components/Hero'
import { CountdownTimer } from '@/components/Timer'
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

    <Hero title='Negocio' desc='Negocio is the country’s first Inter-university Sales Strategy Competition. It is the flagship business competition of Communic, IBA-Jahangirnagar University. ' />

    </div>

    <div className=' flex items-center justify-center'>
        <CountdownTimer />
    </div>

    <div>
        <AboutComponent />
    </div >
    <div className=' container'>

    </div>

        </Default>
    </div>
  )
}

export default Home
