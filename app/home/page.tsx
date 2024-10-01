// pages/index.tsx
import { ContainerDefault } from '@/components/layout/containerDefault';
import { Layout } from '@/components/layout/layout';
import Feedback from '@/components/one-page/feedback';
import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ContentsServicesProps {
    name: string;
    about: string;
    details: string;
    srcImage: string;
    order?: boolean
}

const ContentsSevices: React.FC<ContentsServicesProps> = ({ name, about, details, srcImage, order }) => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14">
                <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8 ">
                    {/* Imagem */}
                    <div className={`flex justify-center md:justify-start ${order ?? "md:order-last"}`}>
                        <Image
                            className={`rounded-lg ${order ?? "mx-auto"}`}
                            src={srcImage}
                            alt={name}
                            width={350}
                            height={214}
                            priority
                        />
                    </div>

                    {/* Texto */}
                    <div className={`flex flex-col justify-center text-center md:text-left gap-6 lg:w-[330px] ${order && "mx-auto"}`}>
                        <p className="text-sm">{name}</p>

                        {/* Usando dangerouslySetInnerHTML para renderizar o HTML dentro do about */}
                        <div className="text-2xl" dangerouslySetInnerHTML={{ __html: about }} />

                        <p className="text-md">{details}</p>

                        <div>
                            <Button>Preciso de um contador</Button>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerDefault>
    );
};


const InstagramPostCard = ({ imageUrl, postUrl, description }: { imageUrl: string, postUrl: string, description: string }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Link href={postUrl} target="_blank">
                <Image src={imageUrl} alt={description} width={400} height={400} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
                <p className="text-sm text-gray-600">{description}</p>
                <Link href={postUrl} target="_blank" className="text-blue-500 text-sm mt-2 inline-block">Ver no Instagram</Link>
            </div>
        </div>
    );
};


const LatestInstagramPosts = () => {
    const posts = [
        {
            imageUrl: '/img/instagram/post1.png',
            postUrl: 'https://www.instagram.com/brandani_contabilidade',
            description: 'Dicas de contabilidade para o agronegócio!',
        },
        {
            imageUrl: '/img/instagram/post2.png',
            postUrl: 'https://www.instagram.com/brandani_contabilidade',
            description: 'Saiba como planejar seu imposto de renda.',
        },
        {
            imageUrl: '/img/instagram/post3.png',
            postUrl: 'https://www.instagram.com/brandani_contabilidade',
            description: 'Microempreendedor individual: como começar.',
        },
    ];

    return (
        <ContainerDefault>

            <div className="container mx-auto text-center  py-20">
                <h2 className="text-3xl">Últimas Postagens</h2>
                <p className="text-gray-700 mb-10">Acompanhe algumas dicas em nosso Instagram!</p>

                <div className="relative md:h-[130px] md:w-[800px] mx-auto ">
                    <div className='md:absolute grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
                        {posts.map((post, index) => (
                            <InstagramPostCard
                                key={index}
                                imageUrl={post.imageUrl}
                                postUrl={post.postUrl}
                                description={post.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ContainerDefault>

    );
};

const CardsServicesList = ({ imageUrl, postUrl, description, title }: { imageUrl: string, postUrl: string, title: string, description: string }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden py-10">
            <Link href={postUrl} target="_blank">
                <div>
                    <Image src={imageUrl} alt={description} width={400} height={400} className="w-20 h-20 object-cover rounded-full mx-auto" />
                </div>
                <div className="flex flex-col gap-4 p-4">
                    <p className="text-gray-600 font-bold">{title}</p>

                    <p className="text-gray-600">{description}</p>
                </div>
            </Link>
        </div>
    );
};

const OurServices = () => {
    const posts = [
        {
            imageUrl: '/img/em-construcao/banner-fundo.png',
            postUrl: 'https://www.instagram.com/brandani_contabilidade',
            title: 'Contabilidade Rural e Empresarial',
            description: 'Confiança e expertise para gerenciar seu negócio.',
        },
        {
            imageUrl: '/img/em-construcao/banner-fundo.png',
            postUrl: 'https://www.instagram.com/brandani_contabilidade',
            title: 'Contabilidade Rural e Empresarial',
            description: 'Confiança e expertise para gerenciar seu negócio.',
        },
        {
            imageUrl: '/img/em-construcao/banner-fundo.png',
            postUrl: 'https://www.instagram.com/brandani_contabilidade',
            title: 'Contabilidade Rural e Empresarial',
            description: 'Confiança e expertise para gerenciar seu negócio.',
        },
    ];

    return (
        <div className="bg-[#0D4259] text-white md:pt-[50px] mb-[250px]">
            <ContainerDefault>

                <div className="mx-auto text-center">
                    <h2 className="text-3xl">SIMPLIFICAMOS SUA CONTABILIDADE</h2>
                    <p className=" mb-10">Nossos Serviços</p>

                    <div className="relative md:h-[130px] md:w-[800px] mx-auto ">
                        <div className='md:absolute grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
                            {posts.map((post, index) => (
                                <CardsServicesList
                                    key={index}
                                    title={post.title}
                                    imageUrl={post.imageUrl}
                                    postUrl={post.postUrl}
                                    description={post.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </ContainerDefault>
        </div>


    );
};

const BannerImageContent = () => {
    return (
        <div className="md:bg-cover bg-center  flex flex-col justify-between" style={{ backgroundImage: `url('img/em-construcao/banner-fundo.png')` }}>
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14">
                    <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8 ">
                        <div className='flex flex-col justify-center text-center md:text-left gap-6 lg:w-[330px] text-white'>
                            <p className="text-sm">EFICIÊNCIA EM TODAS AS ETAPAS</p>

                            {/* Usando dangerouslySetInnerHTML para renderizar o HTML dentro do about */}
                            <div className="text-2xl">
                                Conduta & Ética
                            </div>

                            <p className="text-md">Nosso planejamento tributário otimiza sua carga fiscal para aumentar a lucratividade. Planejamos sua transição patrimonial para garantir o futuro do seu negócio</p>

                            <p className="text-sm">EFICIÊNCIA EM TODAS AS ETAPAS</p>
                            <p className="text-sm">EFICIÊNCIA EM TODAS AS ETAPAS</p>

                            <div>
                                <Button>Preciso de um contador</Button>
                            </div>
                        </div>
                        <div className={`flex justify-center md:justify-start `}>
                            <Image
                                className={`rounded-lg `}
                                src="/img/em-construcao/banner-fundo.png"
                                alt="pessoas"
                                width={350}
                                height={214}
                                priority
                            />
                        </div>
                    </div>
                </div>


            </ContainerDefault>

        </div>
    )
}

const AboutUs = () => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14">
                <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8 ">
                    <div className='flex flex-col gap-6'>
                        <div className="text-sm">SOBRE NÓS</div>
                        <div className="text-2xl">Confie em <br /> nossos melhores <br /> contadores</div>
                        <div>
                            Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade físcal.
                        </div>
                        <div>
                            <div className='flex gap-5'>
                                <Image
                                    className={`rounded-full `}
                                    src="/img/em-construcao/banner-fundo.png"
                                    alt="pessoas"
                                    width={30}
                                    height={50}
                                    priority
                                />
                                Altos padrões de integridades
                            </div>
                            <div className='flex gap-5'>
                                <Image
                                    className={`rounded-full `}
                                    src="/img/em-construcao/banner-fundo.png"
                                    alt="pessoas"
                                    width={30}
                                    height={50}
                                    priority
                                />
                                Altos padrões de integridades
                            </div>
                            <div className='flex gap-5'>
                                <Image
                                    className={`rounded-full `}
                                    src="/img/em-construcao/banner-fundo.png"
                                    alt="pessoas"
                                    width={30}
                                    height={50}
                                    priority
                                />
                                Altos padrões de integridades
                            </div>
                            <div className='flex gap-5'>
                                <Image
                                    className={`rounded-full `}
                                    src="/img/em-construcao/banner-fundo.png"
                                    alt="pessoas"
                                    width={30}
                                    height={50}
                                    priority
                                />
                                Altos padrões de integridades
                            </div>
                        </div>
                        <div className='flex flex-row gap-3 mt-4'>

                            <Link href="/sobre" className={buttonVariants({ variant: "default" })}>Sobre a Brandini</Link>
                            <Button>Preciso de um contatos</Button>
                        </div>
                    </div>
                    <div className='justify-center md:justify-start'>
                        <Image
                            className="rounded-lg h-[380px]"
                            src="/img/em-construcao/banner-fundo.png"
                            alt="pessoas unidas"
                            width={350}
                            height={214}
                            priority
                        />
                    </div>
                </div>
            </div>

        </ContainerDefault>
    )

}

export default function Home() {
    return (
        <Layout>

            <AboutUs />

            <OurServices />

            <ContentsSevices name='CONTABILIDADE RURAL' about={`Do campo à mesa; <br> <span class='text-[#29AAE1] font-semibold'>Nós cuidamos</span> das <br> suas obrigações fiscais`} details='imposto de renda imposto de renda imposto de renda imposto de renda imposto de renda imposto de renda' srcImage='/img/em-construcao/banner-fundo.png' />

            <ContentsSevices name='PLANEJAMENTO TRIBUTÁRIO E SUCESSÓRIO' about={`Pague <span class='text-[#29AAE1] font-semibold'>menos impostos</span> <br> de forma legal e Planejada`} details='Nosso planejamento tributário otimiza sua carga fiscal para aumentar a lucratividade. Planejamos sua transição patrimonial para garantir o futuro do seu negócio.' srcImage='/img/em-construcao/banner-fundo.png' order />

            <ContentsSevices name='CONTABILIDADE EMPRESARIAL' about={`Lucro Real, Presumido <br> ou Simples? Deixe que a <br> <span class='text-[#29AAE1] font-semibold'>Brandani que resolva</span>`} details='Identificamos o melhor regime tributário para a sua empresa. Cuidamos das finanças para você focar no crescimento do seu negócio.' srcImage='/img/em-construcao/banner-fundo.png' />

            <ContentsSevices name='MICROEEMPRENDEDOR INDIVIDUAL' about={`<span class='text-[#29AAE1] font-semibold'>Quer abrir MEI?</span> <br> Nós te ajudamos a <br> começar com o <br> pé direito!`} details='A Brandani orienta e cuida de todo o processo para você formalizar seu negócio sem complicações' srcImage='/img/em-construcao/banner-fundo.png' order />

            <BannerImageContent />

            {/* Como adicionar um Feed do Instagram na sua aplicação React - https://www.youtube.com/watch?v=WaMzfDN66MU */}
            <LatestInstagramPosts />



            <Feedback />
        </Layout>
    );
}
