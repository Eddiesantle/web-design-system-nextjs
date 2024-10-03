import React from 'react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { ContainerDefault } from '../layout/containerDefault';
import Link from 'next/link';


interface BgEthicalConductProps {
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    buttonText: string;
}

const BgEthicalConduct: React.FC<BgEthicalConductProps> = ({
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    buttonText
}) => {
    return (
        <div className="md:bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: `url('img/em-construcao/banner-fundo.png')` }}>
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14">
                    <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8">
                        <ContentSection
                            title={title}
                            subtitle={subtitle}
                            description={description}
                            buttonText={buttonText}
                        />
                        <ImageSection
                            imageSrc={imageSrc}
                            imageAlt={imageAlt}
                        />
                    </div>
                </div>
            </ContainerDefault>
        </div>
    );
};

interface ContentSectionProps {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, subtitle, description, buttonText }) => (
    <div className='flex flex-col justify-center text-center md:text-left gap-6 lg:w-[330px] text-white'>
        <p className="text-sm">{title}</p>
        <div className="text-2xl">{subtitle}</div>
        <p className="text-md">{description}</p>
        <p className="text-sm">{title}</p>
        <p className="text-sm">{title}</p>
        <div>

            <Link href="/contato" className={buttonVariants({ variant: "default" })}>{buttonText}</Link>
        </div>
    </div>
);

interface ImageSectionProps {
    imageSrc: string;
    imageAlt: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ imageSrc, imageAlt }) => (
    <div className={`flex justify-center md:justify-start`}>
        <Image
            className={`rounded-lg`}
            src={imageSrc}
            alt={imageAlt}
            width={350}
            height={214}
            priority
        />
    </div>
);

export default BgEthicalConduct;
