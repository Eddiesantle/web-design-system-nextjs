import React from 'react';
import { ContainerDefault } from '../layout/ContainerDefault';

interface Service {
    title: string;
    description: string;
}

interface AboutOurTreatmentProps {
    services: Service[];
}

const AboutOurTreatment: React.FC<AboutOurTreatmentProps> = ({ services }) => {
    return (
        <div className="bg-tertiary text-gray-600 py-12 md:pt-[50px]">
            <ContainerDefault>
                <div className="mx-auto text-center">
                    <Header />
                    <ServiceGrid services={services} />
                </div>
            </ContainerDefault>
        </div>
    );
};

const Header: React.FC = () => (
    <div className='flex flex-col space-y-4 mb-8'>
        <div className='text-lg'>Como Funciona</div>
        <p className="mb-10 text-3xl">Como é feito o <span className='text-primary font-bold font-[family-name:var(--font-geist-sans)] '>tratamento?</span></p>
        <div>[VIDEO]</div>
    </div>
);

const ServiceGrid: React.FC<AboutOurTreatmentProps> = ({ services }) => (
    <div className=" mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 justify-center'>
            {services.map((service, index) => (
                <ServiceCard key={index} index={index + 1}  {...service} />
            ))}
        </div>
    </div>
);

interface ServiceCardProps extends Service {
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, index }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden py-6">
        <div className='border bg-primary rounded-full w-[40px] h-[40px] flex items-center mx-auto'>
            <div className='text-white font-bold text-2xl mx-auto'>{index} {/* Exibe o índice numerado */}</div>
        </div>
        <div className="flex flex-col gap-4 p-4 ">
            <p className="text-gray-600 font-semibold text-primary mb-4 font-[family-name:var(--font-geist-sans)] text-lg">{title}</p>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);

export default AboutOurTreatment;
