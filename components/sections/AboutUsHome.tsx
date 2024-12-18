import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerDefault } from '../layout/ContainerDefault';
import { buttonVariants } from '../ui/Button';


interface AboutUsHomeProps {
    title: string;
    subtitle: React.JSX.Element;
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
    <div className='flex text-center md:text-start flex-col gap-6'>
        <div className='text-lg'>{title}</div>
        <h2 className="text-4xl">
            {subtitle}
        </h2>
        <div>{description}</div>
        <FeatureList features={features} />
        <ActionButtons />
    </div>
);

const FeatureList: React.FC<{ features: string[] }> = ({ features }) => (
    <div className='flex flex-col gap-y-2 '>
        {features.map((feature, index) => (
            <div key={index} className='flex gap-4 font-medium justify-center lg:justify-start'>
                <Image
                    className="rounded-full"
                    src="/img/home/check-verified.svg"
                    alt="feature icon"
                    width={22}
                    height={22}
                    priority
                />
                {feature}
            </div>
        ))}
    </div>
);

const ActionButtons: React.FC = () => (
    <div className='flex flex-col md:flex-row gap-3 mt-4'>
        <Link href="/#" className={buttonVariants({ variant: "secondary", size: 'lg' })}>Saiba mais sobre min</Link>
        <Link href="/#" className={buttonVariants({ variant: "outline", size: 'lg' })}>Agendar Consulta</Link>
    </div>
);

const ImageSection: React.FC<Pick<AboutUsHomeProps, 'imageSrc' | 'imageAlt'>> = ({
    imageSrc,
    imageAlt
}) => (
    <div className=' justify-center md:justify-start content-center'>
        <Image
            className="rounded-lg"
            src={imageSrc}
            alt={imageAlt}
            width={701}
            height={100}
            priority
        />
    </div>
);

export default AboutUsHome;
