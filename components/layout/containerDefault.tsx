// components/Layout.tsx
import React from 'react';


const ContainerDefault = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="md:container p-3 sm:p-node mx-auto max-w-96 md:max-w-screen-md lg:max-w-screen-xl">
            {children}
        </div>
    );
};

export { ContainerDefault };
