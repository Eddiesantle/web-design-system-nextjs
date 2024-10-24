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
        <div className="md:bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: `url('img/home/banner-fundo-etica.webp')` }}>
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center pt-20">
                    <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto  gap-8">
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
    <div className='flex flex-col justify-center text-center md:text-left gap-6 lg:w-[330px] mb-6 text-white'>
        <p className="text-sm">{title}</p>
        <div className="text-3xl " dangerouslySetInnerHTML={{ __html: subtitle }} />
        <p className="text-md">{description}</p>
        <div className='flex gap-4 items-center'>
            <div className='flex-auto w-[70px]'>
                <Image
                    src="/img/home/extension-puzzle-outline@2x.webp"
                    alt="quebra cabeça"
                    width={59}
                    height={59}
                    priority
                />
            </div>
            <div className="text-lg">Consultoria Personalizada para Contabilidade Rural</div>
        </div>
        <div className='flex gap-4 items-center'>
            <div className='flex-auto w-[60px] '>
                <Image
                    src="/img/home/smartphone-iphone@2x.webp"
                    alt="quebra cabeça"
                    width={29}
                    height={39}
                    priority
                />
            </div>
            <div className="text-lg">Portal Online para Clientes (Área do Cliente)</div>
        </div>
        <div className='my-6'>

            <Link href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target='_blank' className={buttonVariants({ variant: "tertiary", size: 'lg' })}>{buttonText}</Link>
        </div>
    </div>
);

interface ImageSectionProps {
    imageSrc: string;
    imageAlt: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ imageSrc, imageAlt }) => (
    <div className={`flex justify-center md:justify-start `}>
        <Image
            className={`rounded-t-lg`}
            src={imageSrc}
            alt={imageAlt}
            width={350}
            height={214}
            priority
        />
    </div>
);

export default BgEthicalConduct;
