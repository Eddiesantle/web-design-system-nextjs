// pages/index.tsx
import { ContainerDefault } from '@/components/layout/containerDefault';
import { Layout } from '@/components/layout/layout';
import Feedback from '@/components/one-page/feedback';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function Home() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold text-center">Welcome to Brandani Contabilidade</h1>
            <p className="mt-4 text-center">Fundada em 1983, a empresa atua no ramo de contabilidade empresarial.</p>
            <ContainerDefault>
                <div className='grid grid-cols-1 md:grid-cols-10 border justify-center py-12'>
                    <div className='grid col-start-2 col-span-8 md:grid-cols-2 w-full bg-blue-200  border mx-auto'>
                        <div className='grid gap-6 border'>
                            <p>CONTABILIDADE RURAL</p>
                            <h3>Do campo à mesa; Nós cuidamos das suas obrigações fiscais</h3>
                            <p>imposto de renda imposto de renda imposto de renda imposto de renda imposto de renda imposto de renda</p>
                            <div>
                                <Button>Preciso de um contador</Button>
                            </div>
                        </div>
                        <div className='border w-full'>
                            Imagem
                        </div>
                    </div>


                </div>
            </ContainerDefault>
            <Feedback />
        </Layout>
    );
}
