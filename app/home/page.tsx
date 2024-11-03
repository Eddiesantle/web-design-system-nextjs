import { Layout } from '@/components/layout/layout';
import Feedback from '@/components/one-page/feedback';
import AboutAdvancedTechnology from '@/components/ui/aboutAdvancedTechnology';
import AboutOurServices from '@/components/ui/aboutOurServices';
import AboutUsHome from '@/components/ui/aboutUsHome';
import BannerHome from '@/components/ui/bannerHome';
import BriefContentServices from '@/components/ui/briefContentServices';
import React from 'react';

const services = [
    {
        imageUrl: '/img/home/icons8-contabilidade-100.webp',
        postUrl: '/#',
        title: 'Emagrecimento Consciente',
        description: 'Reduza medidas de forma sustentável, respeitando o seu corpo e promovendo a saúde. Nada de dietas radicais, apenas mudanças graduais que você realmente consegue manter.'
    },
    {
        imageUrl: '/img/home/icons8-imposto-96.webp',
        postUrl: '/#',
        title: 'Doenças Autoimunes',
        description: 'Trabalhando com foco no controle dos sintomas e na prevenção de crises, priorizando alimentos que fortalecem o sistema imunológico e ajudam a equilibrar o corpo.'
    },
    {
        imageUrl: '/img/home/icons8-companhia-64.webp',
        postUrl: '/#',
        title: 'Disfunção Gastrointestinal',
        description: 'Cuide da sua saúde digestiva com estratégias nutricionais que promovem o equilíbrio do organismo, ajudando na redução de desconfortos e no aumento da qualidade de vida.'
    },
    // ... more services
];

const mockAboutAdvancedTechnology = [
    {
        imageUrl: '/img/home/icon-scale.svg',
        title: 'Bioimpedanciometria',
        description: 'A avaliação da composição corporal é fundamental para o acompanhamento de programas de emagrecimento, de definição muscular e de ganho de massa muscular.',

    },
    {
        imageUrl: '/img/home/icon-measure-calories.svg',
        title: 'Calorimetria indireta',
        description: "Exame que mede de maneira precisa a quantidade de calorias que são 'queimadas' em repouso, conhecido como metabolismo basal."
    },
    {
        imageUrl: '/img/home/icon-personalized-food.svg',
        title: 'Alimentação personalizada',
        description: 'Receba orientação para uma alimentação adequada, mantendo seu organismo equilibrado e saudável, de acordo com o seu objetivo.'
    },
    // ... more services
];

const testimonials = [
    {
        id: 1,
        text: "Somos clientes há 39 anos, sempre satisfeitos com o atendimento e a eficiência da equipe. No decorrer do tempo percebemos a importância de termos o suporte necessário para nossa segurança contábil, e a Brandani contabilidade nos oferece isso e muito mais.",
        name: "Romeu Rodrigues ",
        officer: "Sócio",
        imageUrl: '/img/home/depoimento-whatsapp-modelo.jpeg'
    },
    {
        id: 2,
        text: " Sou cliente há 22 anos da contabilidade. Parceria de longa data e sólida porque há uma reciprocidade muito virtuosa entre cliente e prestador de serviço, onde há sempre boa fé e profissionalismo, trazendo para o cliente não somente uma experiência técnica que é de extrema qualidade, mas também um atendimento personalizado, com índole honesta e profissional. Sou muito feliz e grato por pela parceria e confiança dos senhores e senhoras.",
        name: "Daniel de Oliveira",
        officer: "Sócio administrador e Pecuarista",
        imageUrl: '/img/home/depoimento-whatsapp-modelo.jpeg'
    },
    {
        id: 3,
        text: "Somos clientes desde 2017, havia 1 ano que havia iniciado o consultório  empreendendo sozinha. Em  meio ao caos do início, das dúvidas, o Escritório como um todo nos abraçou e desde então somos parceiros. Conto com o trabalho prestado de forma excepcional, além  do apoio e da retirada de todas as dúvidas que vão surgindo. São  muito mais que um escritório, pra mim, são investimento.",
        name: "Carla Cristina",
        officer: "sócia administradora",
        imageUrl: '/img/home/depoimento-whatsapp-modelo.jpeg'
    },
    {
        id: 3,
        text: "Somos clientes desde 2017, havia 1 ano que havia iniciado o consultório  empreendendo sozinha. Em  meio ao caos do início, das dúvidas, o Escritório como um todo nos abraçou e desde então somos parceiros. Conto com o trabalho prestado de forma excepcional, além  do apoio e da retirada de todas as dúvidas que vão surgindo. São  muito mais que um escritório, pra mim, são investimento.",
        name: "Carla Cristina",
        officer: "sócia administradora",
        imageUrl: '/img/home/depoimento-whatsapp-modelo.jpeg'
    },
    {
        id: 3,
        text: "Somos clientes desde 2017, havia 1 ano que havia iniciado o consultório  empreendendo sozinha. Em  meio ao caos do início, das dúvidas, o Escritório como um todo nos abraçou e desde então somos parceiros. Conto com o trabalho prestado de forma excepcional, além  do apoio e da retirada de todas as dúvidas que vão surgindo. São  muito mais que um escritório, pra mim, são investimento.",
        name: "Carla Cristina",
        officer: "sócia administradora",
        imageUrl: '/img/home/depoimento-whatsapp-modelo.jpeg'
    },
    {
        id: 3,
        text: "Somos clientes desde 2017, havia 1 ano que havia iniciado o consultório  empreendendo sozinha. Em  meio ao caos do início, das dúvidas, o Escritório como um todo nos abraçou e desde então somos parceiros. Conto com o trabalho prestado de forma excepcional, além  do apoio e da retirada de todas as dúvidas que vão surgindo. São  muito mais que um escritório, pra mim, são investimento.",
        name: "Carla Cristina",
        officer: "sócia administradora",
        imageUrl: '/img/home/depoimento-whatsapp-modelo.jpeg'
    },
    {
        id: 3,
        text: "Somos clientes desde 2017, havia 1 ano que havia iniciado o consultório  empreendendo sozinha. Em  meio ao caos do início, das dúvidas, o Escritório como um todo nos abraçou e desde então somos parceiros. Conto com o trabalho prestado de forma excepcional, além  do apoio e da retirada de todas as dúvidas que vão surgindo. São  muito mais que um escritório, pra mim, são investimento.",
        name: "Carla Cristina",
        officer: "sócia administradora",
        imageUrl: '/img/home/depoimento-whatsapp-modelo.jpeg'
    },
];

const aboutUsHomeFeatures = ['Bem-estar físico', 'Mental', 'Espiritual']

export default function Home() {
    return (
        <Layout>

            <BannerHome />

            <AboutUsHome title='Oi! Eu sou a' subtitle={
                <>
                    Nutricionista <br /> <span className='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'>Magda Simoni</span>
                </>
            } description='Sempre acreditei na nutrição como o caminho para a cura e o bem-estar. Muito além de pesos e medidas, a nutrição é uma jornada de autoconhecimento e equilíbrio. A saúde é o reflexo dos nossos hábitos e da maneira como cuidamos de nós mesmos. Cada pequena escolha que fazemos nos aproxima de uma vida mais plena, com mais energia e vitalidade.' features={aboutUsHomeFeatures} imageAlt='defaultt' imageSrc='/img/home/foto-perfil.jpg' />

            <AboutOurServices services={services} />




            <BriefContentServices name='Investir em Você é Construir um Futuro Mais Saudável' about={
                <>
                    Transforme pequenas escolhas de hoje em<br /> <span className='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'> conquistas de amanhã</span>  <br />
                </>
            } details='Nossa saúde reflete nossos hábitos diários. A cada passo dado em direção a uma alimentação equilibrada e consciente, estamos construindo um futuro de bem-estar físico, mental e espiritual. Acredite no poder das pequenas mudanças, pois elas são o caminho para as grandes transformações.' srcImage='/img/home/healthy-meal-and-happy-people.png' link='/#' />

            <AboutAdvancedTechnology services={mockAboutAdvancedTechnology} />

            {/* <BgEthicalConduct
                title="EFICIÊNCIA EM TODAS AS ETAPAS"
                subtitle="Conduta <span class='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'>& Ética</span>"
                description="A Brandani Contabilidade, preza por desempenhar com eficiência, presteza e atenção, as atribuições de sua função, objetivando melhores resultados e solicitando, se necessário, instruções e esclarecimentos para atingi-los."
                imageSrc="/img/home/tres-pessoas-sorrindo-etica.webp"
                imageAlt="Ethical conduct illustration"
                buttonText="Acessar Portal"
            /> */}

            <BriefContentServices name='Investir em Você é Construir um Futuro Mais Saudável' about={
                <>
                    Transforme pequenas escolhas de hoje em<br /> <span className='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'> conquistas de amanhã</span>  <br />
                </>
            } details='Nossa saúde reflete nossos hábitos diários. A cada passo dado em direção a uma alimentação equilibrada e consciente, estamos construindo um futuro de bem-estar físico, mental e espiritual. Acredite no poder das pequenas mudanças, pois elas são o caminho para as grandes transformações.' srcImage='/img/home/healthy-meal-and-happy-people.png' link='/#' />

            {/* Como adicionar um Feed do Instagram na sua aplicação React - https://www.youtube.com/watch?v=WaMzfDN66MU */}
            {/* <LatestInstagramPosts /> */}

            <Feedback testimonials={testimonials} />
        </Layout>
    );
}
