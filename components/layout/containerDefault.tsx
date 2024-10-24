// components/Layout.tsx
import React from 'react';


const ContainerDefault = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="md:container px-6 sm:p-node mx-auto  md:max-w-screen-md lg:max-w-screen-xl">
            {children}
        </div>
    );
};

export { ContainerDefault };
