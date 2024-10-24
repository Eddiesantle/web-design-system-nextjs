'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContainerDefault } from "../layout/containerDefault";
import { buttonVariants } from "./button";

const images = [
    {
        src: '/img/home/campo-maquinas-plantacao.webp',
        alt: 'Campo com máquinas e plantação'
    },
    {
        src: '/img/home/duas-vacas-campo.webp',
        alt: 'Duas vacas no campo'
    }
];

const StarRating = () => (
    <div className='flex h-[13px]'>
        {[...Array(5)].map((_, index) => (
            <Image
                key={index}
                src="/img/home/icon-star.webp"
                alt="Star"
                width={13}
                height={13}
            />
        ))}
    </div>
);

const BannerHome = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 30000); // Change image every 30 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <ContainerDefault>
            <div className="relative grid grid-cols-1 lg:grid-cols-8 justify-center py-14 my-14 bg-gradient-to-r from-[#035FA5] to-[#348FCA] text-white rounded-[20px] px-3 ">
                <div className="grid md:col-start-2 md:col-span-6 md:grid-cols-2 w-full mx-auto gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="text-sm flex gap-1 items-center">
                            <div>Avaliada no Google com</div>
                            <div className='text-[#FEC106] ml-2'> 5.0</div>
                            <StarRating />
                        </div>
                        <h1 className="text-3xl ">
                            Mais foco no <br /> <span className="text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]">seu negócio</span>, menos <br /> burocracia contábil
                        </h1>
                        <div className='flex md:flex-row flex-col gap-3 mt-4'>
                            <Link href="/contato" className={buttonVariants({ variant: "tertiary", size: 'lg' })}>
                                Preciso de um contador
                            </Link>
                            <Link href="/sobre" className={buttonVariants({ variant: "outline", size: 'lg' })}>
                                Sobre a Brandani
                            </Link>
                        </div>
                    </div>
                </div>
                <BackgroundImages currentImageIndex={currentImageIndex} />
            </div>
        </ContainerDefault>
    );
}

const BackgroundImages = ({ currentImageIndex }: { currentImageIndex: number }) => (
    <>
        <div className="absolute -left-60">
            <Image
                src={`/img/home/b-grande-transparente.webp`}
                alt="b grandão"
                width={400}
                height={300}
                loading="lazy"
            />
        </div>
        <div className='md:absolute mt-4 -right-4 -top-4 w-full md:w-[350px] lg:w-[520px]'>
            <Image
                src={`${images[currentImageIndex].src}`}
                alt={images[currentImageIndex].alt}
                width={520}
                height={200}
                loading="lazy"
            />
        </div>
    </>
);

export default BannerHome;
