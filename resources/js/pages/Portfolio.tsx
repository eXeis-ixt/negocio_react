import ImageCard from '@/components/ImageCard'
import Default from '@/layouts/Default'
import React from 'react'

interface PortfolioProps{
    name?: string,
    image?: string
}

const Portfolio = ({portfolios}: {portfolios: PortfolioProps[]}) => {
  return (
    <div>
        <Default>
            <div className=' container mt-[120px]'>
            <div id="blogs" className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                {portfolios.map((portfolio: PortfolioProps) => (
                    <ImageCard image={portfolio} />
                ))}
            </div>
            </div>
        </Default>
    </div>
  )
}

export default Portfolio
