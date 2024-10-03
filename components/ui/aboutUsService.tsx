import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ContainerDefault } from '../layout/containerDefault';

interface AboutUsServiceProps {
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    order?: boolean
}

const AboutUsService: React.FC<AboutUsServiceProps> = ({
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    order
}) => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14">
                <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8`}>
                    <ImageSection
                        imageSrc={imageSrc}
                        imageAlt={imageAlt}
                        order={order}
                    />
                    <ContentSection
                        title={title}
                        subtitle={subtitle}
                        description={description}
                    />

                </div>
            </div>
        </ContainerDefault>
    );
};

const ContentSection: React.FC<Pick<AboutUsServiceProps, 'title' | 'subtitle' | 'description'>> = ({
    title,
    subtitle,
    description
}) => (
    <div className='flex flex-col gap-6'>
        <div className="text-sm">{title}</div>
        <div className="text-2xl">{subtitle}</div>
        <div>{description}</div>
        <div className='flex flex-row gap-3 mt-4'>
            <Link href="/sobre" className={buttonVariants({ variant: "default" })}>
                Sobre a Brandini
            </Link>
        </div>
    </div>
);

const ImageSection: React.FC<Pick<AboutUsServiceProps, 'imageSrc' | 'imageAlt' | 'order'>> = ({
    imageSrc,
    imageAlt,
    order
}) => (
    <div className={`flex justify-center md:justify-start ${order ?? "md:order-last"}`}>
        <Image
            className={`rounded-lg h-[280px] ${order ?? "mx-auto"}`}
            src={imageSrc}
            alt={imageAlt}
            width={350}
            height={214}
            priority
        />
    </div>
);

export default AboutUsService;
