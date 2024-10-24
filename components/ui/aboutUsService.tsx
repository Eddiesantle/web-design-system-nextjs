import React from 'react';
import Image from 'next/image';
import { ContainerDefault } from '../layout/containerDefault';
import Link from 'next/link';
import { buttonVariants } from './button';

interface AboutUsServiceProps {
    id?: string
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    order?: boolean
    mobile?: boolean
}

const AboutUsService: React.FC<AboutUsServiceProps> = ({
    id,
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    order
}) => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center pt-14 pb-20" id={id}>
                <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8 `}>
                    <ImageSection
                        imageSrc={imageSrc}
                        imageAlt={imageAlt}
                        order={order}
                    />
                    <ContentSection
                        title={title}
                        subtitle={subtitle}
                        description={description}
                        imageAlt={imageAlt}
                        imageSrc={imageSrc}
                    />

                </div>
            </div>
        </ContainerDefault>
    );
};

const ContentSection: React.FC<Pick<AboutUsServiceProps, 'title' | 'subtitle' | 'description' | 'imageAlt' | 'imageSrc'>> = ({
    title,
    subtitle,
    description,
    imageAlt,
    imageSrc,
}) => (
    <div className='flex flex-col gap-6 lg:w-[360px] text-center md:text-left '>
        <div className="text-sm">{title}</div>
        <div className="text-3xl" dangerouslySetInnerHTML={{ __html: subtitle }} />
        <ImageSection
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            mobile
        />
        <div>{description}</div>
        <div className="flex flex-col md:flex-row gap-3 mt-4">
            <Link href="/contato" className={buttonVariants({ variant: "tertiary", size: 'lg' })}>Preciso de um contador</Link>
        </div>

    </div>
);

const ImageSection: React.FC<Pick<AboutUsServiceProps, 'imageSrc' | 'imageAlt' | 'order' | 'mobile'>> = ({
    imageSrc,
    imageAlt,
    order,
    mobile
}) => (
    <div className={`flex justify-center md:justify-start  ${order ?? "md:order-last"} ${mobile ? "md:hidden" : "hidden md:block"}`}>
        <Image
            className={`rounded-lg  ${order ?? "mx-auto"}`}
            src={imageSrc}
            alt={imageAlt}
            width={701}
            height={100}
            priority
        />
    </div>
);

export default AboutUsService;
