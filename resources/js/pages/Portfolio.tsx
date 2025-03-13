import ImageCard from '@/components/ImageCard';
import { Button } from '@/components/ui/button';
import { EvervaultIcon } from '@/components/ui/evervault-icon';
import Default from '@/layouts/Default';
import { Head, Link } from '@inertiajs/react';

interface PortfolioProps {
    name?: string;
    image?: string;
}

const Portfolio = ({ portfolios }: { portfolios: PortfolioProps[] }) => {
    return (
        <div>
            <Head>
                <title> About Negocio</title>
            </Head>
            <Default>
                <div className="container mt-[200px]">
                    <div className="grid grid-cols-1 h-full w-full items-center justify-between gap-10 md:grid-cols-2">
                        <div>
                            <div>
                                <h1 className="text-4xl font-bold text-[#44af88]">About Negocio</h1>
                            </div>
                            <div className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-200">
                                Negocio is the country’s first Inter-university Sales Strategy Competition. It is the flagship business competition of
                                Communic, IBA-Jahangirnagar University. The Strategic approach to sales will enable the business to adapt to any
                                changes in technology, customer behavior, socio-economy, and other trends. Businesses require planning for the long
                                term. This is a space where participants can showcase that thinking along with their sales skills.
                            </div>
                            <div className="mt-5">
                                <Link href={route('home')}>
                                <Button>Learn more</Button>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className="relative mx-auto flex h-auto max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">
                                    <EvervaultIcon className="absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white" />
                                    <EvervaultIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
                                    <EvervaultIcon className="absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white" />
                                    <EvervaultIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white" />

                                    <img src="/negocioabout.jpg" className="h-full w-fit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-[200px] mb-[200px]">
                    <div>
                        <h1 className="text-center text-4xl font-bold">Our portfolio</h1>
                    </div>
                    <div id="blogs" className="mt-[80px] grid grid-cols-1 gap-5 md:grid-cols-3">
                        {portfolios.map((portfolio: PortfolioProps) => (
                            <ImageCard image={portfolio} />
                        ))}
                    </div>
                </div>
            </Default>
        </div>
    );
};

export default Portfolio;
