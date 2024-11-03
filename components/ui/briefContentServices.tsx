import React from 'react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { ContainerDefault } from '../layout/containerDefault';
import Link from 'next/link';


interface ContentsServicesProps {
    name: string;
    about: React.JSX.Element;
    details: string;
    srcImage: string;
    order?: string;
    link: string;
}

const BriefContentServices: React.FC<ContentsServicesProps> = ({
    name,
    about,
    details,
    srcImage,
    order,
    link
}) => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14 ">
                <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8">
                    <ImageSection srcImage={srcImage} name={name} order={order} />
                    <TextSection name={name} about={about} details={details} order={order} link={link} />
                </div>
            </div>
        </ContainerDefault>
    );
};

const ImageSection: React.FC<Pick<ContentsServicesProps, 'srcImage' | 'name' | 'order'>> = ({
    srcImage,
    name,
    order
}) => (
    <div className={`flex justify-center md:justify-start ${order ?? "md:order-last"}`}>
        <Image
            className={`rounded-lg ${order ?? "mx-auto"}`}
            src={srcImage}
            alt={name}
            width={362}
            height={375}
            priority
        />
    </div>
);

const TextSection: React.FC<Omit<ContentsServicesProps, 'srcImage'>> = ({
    name,
    about,
    details,
    order,
    link
}) => (
    <div className={`flex flex-col justify-center text-center md:text-left gap-6 lg:w-[360px] ${order && "mx-auto"}`}>
        <p className="text-sm">{name}</p>
        <div className="text-2xl md:text-3xl">{about}</div>
        <p className="text-md">{details}</p>
        <div className='flex flex-col md:flex-row gap-3 mt-4'>
            <Link href={link} className={buttonVariants({ variant: "secondary", size: 'lg' })}>Saber mais</Link>
        </div>

    </div>
);

export default BriefContentServices;
