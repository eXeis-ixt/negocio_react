import Footer from '@/components/Navigation/Footer';
import { Navbar } from '@/components/Navigation/Navbar';
import { PropsWithChildren } from 'react';

const Default = ({ children }: PropsWithChildren) => {
    return (
        <div className=' '>
        <div>
            <Navbar />
          </div>
            <div className="">{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Default;
