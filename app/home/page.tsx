import { Layout } from '@/components/layout/layout';
import Feedback from '@/components/one-page/feedback';
import AboutOurServices from '@/components/ui/aboutOurServices';
import AboutUsHome from '@/components/ui/aboutUsHome';
import BgEthicalConduct from '@/components/ui/bgEthicalConduct';
import BriefContentServices from '@/components/ui/briefContentServices';
import LatestInstagramPosts from '@/components/ui/latestInstagramPosts';
import React from 'react';


const instagramPosts = [
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

const services = [
    {
        imageUrl: '/img/em-construcao/banner-fundo.png',
        postUrl: 'https://example.com/service1',
        title: 'Contabilidade Empresarial',
        description: 'Serviços contábeis especializados para sua empresa.'
    },
    {
        imageUrl: '/img/em-construcao/banner-fundo.png',
        postUrl: 'https://example.com/service1',
        title: 'Contabilidade Empresarial',
        description: 'Serviços contábeis especializados para sua empresa.'
    },
    {
        imageUrl: '/img/em-construcao/banner-fundo.png',
        postUrl: 'https://example.com/service1',
        title: 'Contabilidade Empresarial',
        description: 'Serviços contábeis especializados para sua empresa.'
    },
    // ... more services
];

const testimonials = [
    {
        id: 1,
        text: "O serviço prestado pela Brandani Contabilidade foi excepcional. A equipe é extremamente atenciosa e eficiente.",
        name: "João Silva",
    },
    {
        id: 2,
        text: "Profissionais qualificados e prontos para ajudar em todas as necessidades contábeis da minha empresa.",
        name: "Maria Souza",
    },
    {
        id: 3,
        text: "Sempre atenciosos e rápidos no atendimento. Recomendo a Brandani Contabilidade para todos os meus colegas!",
        name: "Carlos Lima",
    },
    {
        id: 4,
        text: "Excelente serviço e ótima relação custo-benefício. Equipe preparada e confiável.",
        name: "Fernanda Dias",
    },
    {
        id: 3,
        text: "Sempre atenciosos e rápidos no atendimento. Recomendo a Brandani Contabilidade para todos os meus colegas!",
        name: "Marta Lima",
    },
    {
        id: 4,
        text: "Excelente serviço e ótima relação custo-benefício. Equipe preparada e confiável.",
        name: "Sandra Dias",
    },
    {
        id: 4,
        text: "Excelente serviço e ótima relação custo-benefício. Equipe preparada e confiável.",
        name: "Fernanda Dias",
    },
];

const aboutUsHomeFeatures = ['Altos padrões de integridades', 'Altos padrões de integridades', 'Altos padrões de integridades', 'Altos padrões de integridades', 'Altos padrões de integridades', 'Altos padrões de integridades']

export default function Home() {
    return (
        <Layout>

            <AboutUsHome title='SOBRE NÓS' subtitle='Confie em nossos melhores contadores' description='Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade físcal.' features={aboutUsHomeFeatures} imageAlt='defaultt' imageSrc='/img/em-construcao/banner-fundo.png' />

            <AboutOurServices services={services} />

            <BriefContentServices name='CONTABILIDADE RURAL' about={`Do campo à mesa; <br> <span class='text-[#29AAE1] font-semibold'>Nós cuidamos</span> das <br> suas obrigações fiscais`} details='imposto de renda imposto de renda imposto de renda imposto de renda imposto de renda imposto de renda' srcImage='/img/em-construcao/banner-fundo.png' />

            <BriefContentServices name='PLANEJAMENTO TRIBUTÁRIO E SUCESSÓRIO' about={`Pague <span class='text-[#29AAE1] font-semibold'>menos impostos</span> <br> de forma legal e Planejada`} details='Nosso planejamento tributário otimiza sua carga fiscal para aumentar a lucratividade. Planejamos sua transição patrimonial para garantir o futuro do seu negócio.' srcImage='/img/em-construcao/banner-fundo.png' order="md:order-first" />

            <BriefContentServices name='CONTABILIDADE EMPRESARIAL' about={`Lucro Real, Presumido <br> ou Simples? Deixe que a <br> <span class='text-[#29AAE1] font-semibold'>Brandani que resolva</span>`} details='Identificamos o melhor regime tributário para a sua empresa. Cuidamos das finanças para você focar no crescimento do seu negócio.' srcImage='/img/em-construcao/banner-fundo.png' />

            <BriefContentServices name='MICROEEMPRENDEDOR INDIVIDUAL' about={`<span class='text-[#29AAE1] font-semibold'>Quer abrir MEI?</span> <br> Nós te ajudamos a <br> começar com o <br> pé direito!`} details='A Brandani orienta e cuida de todo o processo para você formalizar seu negócio sem complicações' srcImage='/img/em-construcao/banner-fundo.png' order="md:order-first" />

            <BgEthicalConduct
                title="EFICIÊNCIA EM TODAS AS ETAPAS"
                subtitle="Conduta & Ética"
                description="Nosso planejamento tributário otimiza sua carga fiscal para aumentar a lucratividade. Planejamos sua transição patrimonial para garantir o futuro do seu negócio"
                imageSrc="/img/em-construcao/banner-fundo.png"
                imageAlt="Ethical conduct illustration"
                buttonText="Preciso de um contador"
            />

            {/* Como adicionar um Feed do Instagram na sua aplicação React - https://www.youtube.com/watch?v=WaMzfDN66MU */}
            <LatestInstagramPosts posts={instagramPosts} />

            <Feedback testimonials={testimonials} />
        </Layout>
    );
}
