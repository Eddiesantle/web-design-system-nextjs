// components/Layout.tsx
import React from 'react';
import Navbar from '../ui/navbar';


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white text-white">
                <div className="container mx-auto p-2">
                    <Navbar />
                </div>
            </header>

            <main className="flex-1 container mx-auto p-4">
                {children}
            </main>

            <footer className="bg-gray-900 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>© 2024 Brandani Contabilidade. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export { Layout };
