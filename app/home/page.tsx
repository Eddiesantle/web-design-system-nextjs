// pages/index.tsx
import { Layout } from '@/components/layout/layout';
import React from 'react';

export default function Home() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold text-center">Welcome to Brandani Contabilidade</h1>
            <p className="mt-4 text-center">Fundada em 1983, a empresa atua no ramo de contabilidade empresarial.</p>
        </Layout>
    );
}
