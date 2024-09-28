// components/Layout.tsx
import React from 'react';


const containerContents = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-10 border justify-center py-12'>
            {children}
        </div>
    );
};

export { containerContents };
