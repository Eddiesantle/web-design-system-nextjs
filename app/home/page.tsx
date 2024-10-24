import { Layout } from '@/components/layout/layout';
import Feedback from '@/components/one-page/feedback';
import AboutOurServices from '@/components/ui/aboutOurServices';
import AboutUsHome from '@/components/ui/aboutUsHome';
import BannerHome from '@/components/ui/bannerHome';
import BgEthicalConduct from '@/components/ui/bgEthicalConduct';
import BriefContentServices from '@/components/ui/briefContentServices';
import LatestInstagramPosts from '@/components/ui/latestInstagramPosts';
import Image from 'next/image';
import React from 'react';

const services = [
    {
        imageUrl: '/img/home/icons8-contabilidade-100.webp',
        postUrl: '/servicos/contabilidade',
        title: 'Contabilidade Rural e Empresarial',
        description: 'Confiança e expertise para gerenciar seu negócio.'
    },
    {
        imageUrl: '/img/home/icons8-imposto-96.webp',
        postUrl: '/servicos/planejamento',
        title: 'Planejamento Tributário e Sucessório',
        description: 'Otimizamos sua carga fiscal para aumentar a lucratividade.'
    },
    {
        imageUrl: '/img/home/icons8-companhia-64.webp',
        postUrl: '/servicos/contabilidade',
        title: 'Pequenas Empresas',
        description: 'Soluções inteligentes para produtores rurais, empresas de qualquer porte e clínicas.'
    },
    // ... more services
];

const testimonials = [
    {
        id: 1,
        text: "O serviço prestado pela Brandani Contabilidade foi excepcional. A equipe é extremamente atenciosa e eficiente.",
        name: "João Silva",
        officer: "Sócio Presidente"
    },
    {
        id: 2,
        text: "Profissionais qualificados e prontos para ajudar em todas as necessidades contábeis da minha empresa.",
        name: "Maria Souza",
        officer: "Diretora Comercial"
    },
    {
        id: 3,
        text: "Sempre atenciosos e rápidos no atendimento. Recomendo a Brandani Contabilidade para todos os meus colegas!",
        name: "Carlos Lima",
        officer: "Gerente de Vendas"
    },
    {
        id: 4,
        text: "Excelente serviço e ótima relação custo-benefício. Equipe preparada e confiável.",
        name: "Fernanda Dias",
        officer: "Assistente de Contabilidade"
    },
    {
        id: 3,
        text: "Sempre atenciosos e rápidos no atendimento. Recomendo a Brandani Contabilidade para todos os meus colegas!",
        name: "Marta Lima",
        officer: "Gerente de Vendas"
    },
    {
        id: 4,
        text: "Excelente serviço e ótima relação custo-benefício. Equipe preparada e confiável.",
        name: "Sandra Dias",
        officer: "Assistente de Contabilidade"
    },
    {
        id: 4,
        text: "Excelente serviço e ótima relação custo-benefício. Equipe preparada e confiável.",
        name: "Fernanda Dias",
        officer: "Assistente de Contabilidade"
    },
];

const aboutUsHomeFeatures = ['Altos padrões de integridades', 'Melhor serviço de contabilidade', 'Controle de qualidade', 'Equipe Profissional', 'Suporte ao cliente']

export default function Home() {
    return (
        <Layout>

            <BannerHome />

            <AboutUsHome title='SOBRE NÓS' subtitle="Confie em <br> <span class='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'>nossos melhores</span> <br> contadores" description='Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade fiscal.' features={aboutUsHomeFeatures} imageAlt='defaultt' imageSrc='/img/home/pessoas-mesa-reuniao.webp' />

            <AboutOurServices services={services} />


            <BriefContentServices name='CONTABILIDADE RURAL' about={`Do campo à mesa; <br> <span class='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'>Nós cuidamos</span> das <br> suas obrigações fiscais`} details='Imposto de Renda do Agricultor ou do Produtor Rural? Nós fazemos para você! Elimine preocupações fiscal e maximize seus lucros.' srcImage='/img/home/homem-campo-feliz.webp' link='/servicos/contabilidade#rural' />


            <div className="relative ">
                <div className="absolute -left-60">
                    <Image src="/img/home/b-grande-transparente.webp" alt="b grandão" width={531} height={492} />
                </div>
            </div>

            <BriefContentServices name='PLANEJAMENTO TRIBUTÁRIO E SUCESSÓRIO' about={`Pague <span class='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'>menos impostos</span> <br> de forma legal e Planejada`} details='Nosso planejamento tributário otimiza sua carga fiscal para aumentar a lucratividade. Planejamos sua transição patrimonial para garantir o futuro do seu negócio.' srcImage='/img/home/mulher-analisando-papeis.webp' order="md:order-first" link='/servicos/planejamento#sucessorio' />

            <BriefContentServices name='CONTABILIDADE EMPRESARIAL' about={`Lucro Real, Presumido <br> ou Simples? Deixe que a <br> <span class='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'>Brandani que resolva</span>`} details='Identificamos o melhor regime tributário para a sua empresa. Cuidamos das finanças para você focar no crescimento do seu negócio.' srcImage='/img/home/homem-olhando-para-lado-com-cardeneta.webp' link='/servicos/contabilidade#empresarial' />


            <BgEthicalConduct
                title="EFICIÊNCIA EM TODAS AS ETAPAS"
                subtitle="Conduta <span class='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'>& Ética</span>"
                description="A Brandani Contabilidade, preza por desempenhar com eficiência, presteza e atenção, as atribuições de sua função, objetivando melhores resultados e solicitando, se necessário, instruções e esclarecimentos para atingi-los."
                imageSrc="/img/home/tres-pessoas-sorrindo-etica.webp"
                imageAlt="Ethical conduct illustration"
                buttonText="Acessar Portal"
            />

            {/* Como adicionar um Feed do Instagram na sua aplicação React - https://www.youtube.com/watch?v=WaMzfDN66MU */}
            <LatestInstagramPosts />

            <Feedback testimonials={testimonials} />
        </Layout>
    );
}
