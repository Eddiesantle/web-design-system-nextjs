import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ContainerDefault } from '../layout/containerDefault';


interface AboutUsHomeProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    imageSrc: string;
    imageAlt: string;
}

const AboutUsHome: React.FC<AboutUsHomeProps> = ({
    title,
    subtitle,
    description,
    features,
    imageSrc,
    imageAlt
}) => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14">
                <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8">
                    <ContentSection
                        title={title}
                        subtitle={subtitle}
                        description={description}
                        features={features}
                    />
                    <ImageSection
                        imageSrc={imageSrc}
                        imageAlt={imageAlt}
                    />
                </div>
            </div>
        </ContainerDefault>
    );
};

const ContentSection: React.FC<Omit<AboutUsHomeProps, 'imageSrc' | 'imageAlt'>> = ({
    title,
    subtitle,
    description,
    features
}) => (
    <div className='flex flex-col gap-6'>
        <div className="text-sm">{title}</div>
        <div className="text-2xl">{subtitle}</div>
        <div>{description}</div>
        <FeatureList features={features} />
        <ActionButtons />
    </div>
);

const FeatureList: React.FC<{ features: string[] }> = ({ features }) => (
    <div>
        {features.map((feature, index) => (
            <div key={index} className='flex gap-5'>
                <Image
                    className="rounded-full"
                    src="/img/em-construcao/banner-fundo.png"
                    alt="feature icon"
                    width={30}
                    height={50}
                    priority
                />
                {feature}
            </div>
        ))}
    </div>
);

const ActionButtons: React.FC = () => (
    <div className='flex flex-row gap-3 mt-4'>
        <Link href="/sobre" className={buttonVariants({ variant: "default" })}>Sobre a Brandini</Link>
        <Link href="/contato" className={buttonVariants({ variant: "default" })}>Preciso de um contato</Link>
    </div>
);

const ImageSection: React.FC<Pick<AboutUsHomeProps, 'imageSrc' | 'imageAlt'>> = ({
    imageSrc,
    imageAlt
}) => (
    <div className='justify-center md:justify-start'>
        <Image
            className="rounded-lg h-[380px]"
            src={imageSrc}
            alt={imageAlt}
            width={350}
            height={214}
            priority
        />
    </div>
);

export default AboutUsHome;