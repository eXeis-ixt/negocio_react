import { Hero } from '@/components/Hero'
import BentoGrid from '@/components/bento'
import { Card } from '@/components/ui/card'
import Default from '@/layouts/Default'
import { CheckCircle, Globe, TrendingUp, Video } from 'lucide-react'
import React from 'react'
interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

const itemsSample: BentoItem[] = [
  {
      title: "Analytics Dashboard",
      meta: "v2.4.1",
      description:
          "Real-time metrics with AI-powered insights and predictive analytics",
      icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
      status: "Live",
      tags: ["Statistics", "Reports", "AI"],
      colSpan: 2,
      hasPersistentHover: true,
  },
  {
      title: "Task Manager",
      meta: "84 completed",
      description: "Automated workflow management with priority scheduling",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
      status: "Updated",
      tags: ["Productivity", "Automation"],
  },
  {
      title: "Media Library",
      meta: "12GB used",
      description: "Cloud storage with intelligent content processing",
      icon: <Video className="w-4 h-4 text-purple-500" />,
      tags: ["Storage", "CDN"],
      colSpan: 2,
  },
  {
      title: "Global Network",
      meta: "6 regions",
      description: "Multi-region deployment with edge computing",
      icon: <Globe className="w-4 h-4 text-sky-500" />,
      status: "Beta",
      tags: ["Infrastructure", "Edge"],
  },
];

const Home = () => {
  return (
    <div>
        <Default>

    <Hero/>

    <BentoGrid items={itemsSample} />

        </Default>
    </div>
  )
}

export default Home
