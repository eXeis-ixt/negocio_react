import React from 'react'
import { Button } from './ui/button'

const AboutComponent = () => {
  return (
    <div>
                                                        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h6 className="text-gray-400  dark:text-gray-50 font-normal leading-relaxed">About Communic</h6>
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    className="text-[#44af88] dark:text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    The Tale of Our Achievement Story</h2>
                                <p
                                    className="text-gray-500 dark:text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                                   A platform, a learning hub, a student’s go-to practice ground is what defines COMMUNIC, the renowned club at IBA. The potential students of the prestigious Institute are continuously involved in learning, practicing & mastering fundamental & specialized communication skills through various programs, workshops, sessions & competitions. The Club aims not only to equip them with highly effective & efficient levels of diversified skills but also creates an entry-level ecosystem in the job world that will benefit the students with a leading edge in today’s competitive arena.</p>
                            </div>
                        </div>

                    </div>
                   <Button>
                    Learn more
                   </Button>
                </div>
                <div className="w-full lg:justify-start justify-center items-start flex">
                    <div
                        className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 dark:border-zinc-600 relative">
                        <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                            src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default AboutComponent
