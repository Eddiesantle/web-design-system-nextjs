import React from 'react';
import Image from 'next/image';
import { ContainerDefault } from '../layout/containerDefault';


interface ServiceItem {
    icon: string;
    description: string;
}

interface ServicesOfferedProps {
    title: string;
    description: string;
    services: ServiceItem[];
}

const ServicesOffered: React.FC<ServicesOfferedProps> = ({ title, description, services }) => {
    return (
        <div className="bg-[#003F71] text-white">
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14">
                    <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8">
                        <CompanyDescription title={title} description={description} />
                        <ServicesList services={services} />
                    </div>
                </div>
            </ContainerDefault>
        </div>
    );
};

const CompanyDescription: React.FC<Pick<ServicesOfferedProps, 'title' | 'description'>> = ({ title, description }) => (
    <div className='flex flex-col gap-6 md:w-[80%]'>
        <h2 className="text-secondary">{title}</h2>
        <p>{description}</p>
    </div>
);

const ServicesList: React.FC<Pick<ServicesOfferedProps, 'services'>> = ({ services }) => (
    <div className='flex flex-col gap-6'>
        <h2 className="text-2xl">Serviços <span className='text-secondary font-serif'>Oferecidos</span></h2>
        <div className="flex flex-col gap-3">
            {services.map((service, index) => (
                <ServiceItem key={index} icon={service.icon} description={service.description} />
            ))}
        </div>
    </div>
);

const ServiceItem: React.FC<ServiceItem> = ({ icon, description }) => (
    <div className='flex gap-5'>
        <Image
            className="rounded-full"
            src={icon}
            alt="Service icon"
            width={30}
            height={50}
            priority
        />
        {description}
    </div>
);

export default ServicesOffered;
