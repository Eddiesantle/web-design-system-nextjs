import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ContainerDefault } from '../layout/containerDefault';

interface Service {
    imageUrl: string;
    postUrl: string;
    title: string;
    description: string;
}

interface AboutOurServicesProps {
    services: Service[];
}

const AboutOurServices: React.FC<AboutOurServicesProps> = ({ services }) => {
    return (
        <div className="bg-primary text-white py-12 md:pt-[50px] md:mb-[250px]">
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
        <h2 className="text-secondary">SIMPLIFICAMOS SUA CONTABILIDADE</h2>
        <p className="mb-10 text-3xl">Nossos <span className='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)] '>Serviços</span></p>
    </div>
);

const ServiceGrid: React.FC<AboutOurServicesProps> = ({ services }) => (
    <div className="relative md:h-[130px] lg:w-[800px] mx-auto">
        <div className='md:absolute grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8'>
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    </div>
);

const ServiceCard: React.FC<Service> = ({ imageUrl, postUrl, title, description }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden py-6">
        <Link href={postUrl}>
            <div className='border bg-[#0060AD] rounded-full w-[80px] h-[80px] flex items-center mx-auto'>
                <Image
                    src={imageUrl}
                    alt={description}
                    width={56}
                    height={56}
                    className="object-cover mx-auto p-1"
                />
            </div>
            <div className="flex flex-col gap-4 p-4 ">
                <p className="text-gray-600 font-semibold text-secondary mb-4">{title}</p>
                <p className="text-gray-600">{description}</p>
            </div>
        </Link>
    </div>
);

export default AboutOurServices;
