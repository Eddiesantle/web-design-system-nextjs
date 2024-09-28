// components/Layout.tsx
import React from 'react';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white text-white">
                <div className="container mx-auto p-2">
                    <Navbar />
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>


            <Footer />
        </div>
    );
};

export { Layout };
