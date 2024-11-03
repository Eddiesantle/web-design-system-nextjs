import React from 'react';

import { ContainerDefault } from '../layout/containerDefault';

const LatestInstagramPosts = () => {
    return (
        <ContainerDefault>
            <div className="container mx-auto text-center py-20">

                <h3 className="text-3xl mt-2">Últimas <span className="text-secondary  font-semibold font-[family-name:var(--font-geist-sans)]">Postagens</span></h3>
                <p className="text-gray-700 mb-10">Acompanhe algumas dicas em nosso Instagram!</p>
                <div className="elfsight-app-18a2aa12-1dae-4011-aab4-2a3a22fffc19" data-elfsight-app-lazy></div>
            </div>
        </ContainerDefault>
    );
};



export default LatestInstagramPosts;
