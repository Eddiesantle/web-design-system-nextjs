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
        <div className="bg-[#0D4259] text-white md:pt-[50px] mb-[250px]">
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
    <>
        <h2 className="text-3xl">SIMPLIFICAMOS SUA CONTABILIDADE</h2>
        <p className="mb-10">Nossos Serviços</p>
    </>
);

const ServiceGrid: React.FC<AboutOurServicesProps> = ({ services }) => (
    <div className="relative md:h-[130px] md:w-[800px] mx-auto">
        <div className='md:absolute grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    </div>
);

const ServiceCard: React.FC<Service> = ({ imageUrl, postUrl, title, description }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden py-10">
        <Link href={postUrl} target="_blank">
            <div>
                <Image
                    src={imageUrl}
                    alt={description}
                    width={400}
                    height={400}
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                />
            </div>
            <div className="flex flex-col gap-4 p-4">
                <p className="text-gray-600 font-bold">{title}</p>
                <p className="text-gray-600">{description}</p>
            </div>
        </Link>
    </div>
);

export default AboutOurServices;
