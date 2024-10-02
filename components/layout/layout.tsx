// components/Layout.tsx
import React from 'react';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';

const NavbarRange = () => {
    return (<div className='bg-[#EEF2F6] text-black'>
        <div className='container mx-auto text-center py-2 px-12 flex flex-col md:flex-row md:justify-between text-sm gap-2'>
            <div className='flex flex-col md:flex-row gap-0 md:gap-3 mx-auto md:mx-0'>
                <div>(69) 9.9981-0662</div>
                <div>contato@brandani.com.br</div>
            </div>
            <div>FAZER LOGIN</div>
        </div>
    </div>)
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <NavbarRange />
                <Navbar />
            </header>

            <main className="flex-1">
                {children}
            </main>


            <Footer />
        </div>
    );
};

export { Layout };
