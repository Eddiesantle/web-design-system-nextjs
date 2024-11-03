import React from 'react';
import Image from 'next/image';
import { ContainerDefault } from '../layout/containerDefault';

interface Service {
    imageUrl: string;
    title: string;
    description: string;
}

interface AboutAdvancedTechnologyProps {
    services: Service[];
}

const AboutAdvancedTechnology: React.FC<AboutAdvancedTechnologyProps> = ({ services }) => {
    return (
        <div className="bg-[#EAEAEA] text-gray-500 py-12 md:pt-[50px] md:mb-[100px]">
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
    <div className='flex flex-col space-y-4 mb-6'>
        <p className="mb-10 text-4xl"><span className='text-primary font-semibold font-[family-name:var(--font-geist-sans)]'>Tecnologias médicas</span></p>
        <div className='font-semibold text-lg'>
            Métodos avançados para avaliar <br />
            as características metabólicas de cada paciente.
        </div>
    </div>
);

const ServiceGrid: React.FC<AboutAdvancedTechnologyProps> = ({ services }) => (
    <div className="mx-auto">
        <div className=' grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8'>
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    </div>
);

const ServiceCard: React.FC<Service> = ({ imageUrl, title, description }) => (
    <div className="py-6">
        <div className='border bg-tertiary rounded-full w-[100px] h-[100px] flex items-center mx-auto'>
            <Image
                src={imageUrl}
                alt={description}
                width={76}
                height={76}
                className="object-cover mx-auto p-1"
            />
        </div>
        <div className="flex flex-col gap-4 p-4 ">
            <p className="font-semibold mb-4 text-xl">{title}</p>
            <p>{description}</p>
        </div>
    </div>
);

export default AboutAdvancedTechnology;
