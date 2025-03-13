import React from 'react'
import { Timeline } from "@/components/ui/timeline";

const PortfolioTimeline = () => {
    const data = [
        {
          title: "Registration",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
              March 21- April 17              </p>

            </div>
          ),
        },
        {
          title: "Round 1",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
                April 18 - April 27
              </p>


            </div>
          ),
        },
        {
          title: "Round 2",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
                April 28 - May 8
              </p>


            </div>
          ),
        },
      ];
      return (
        <div className="w-full">
          <Timeline data={data} />
        </div>
      );
}

export default PortfolioTimeline
