
import { Layout } from '@/components/layout/Layout';
import AboutAdvancedTechnology from '@/components/sections/AboutAdvancedTechnology';
import AboutOurServices from '@/components/sections/AboutOurServices';
import AboutOurTreatment from '@/components/sections/AboutOurTreatment';
import AboutUsHome from '@/components/sections/AboutUsHome';
import BannerHome from '@/components/sections/BannerHome';
import BriefContentServices from '@/components/sections/BriefContentServices';
import Feedback from '@/components/sections/Feedback';
import React from 'react';

const mockServices = [
    {
        imageUrl: '/img/home/icon-diet.png',
        postUrl: '/#',
        title: 'Emagrecimento Consciente',
        description: 'Reduza medidas de forma sustentável, respeitando o seu corpo e promovendo a saúde. Nada de dietas radicais, apenas mudanças graduais que você realmente consegue manter.'
    },
    {
        imageUrl: '/img/home/icon-virus-minimize.png',
        postUrl: '/#',
        title: 'Doenças Autoimunes',
        description: 'Trabalhando com foco no controle dos sintomas e na prevenção de crises, priorizando alimentos que fortalecem o sistema imunológico e ajudam a equilibrar o corpo.'
    },
    {
        imageUrl: '/img/home/icon-stomachache.png',
        postUrl: '/#',
        title: 'Disfunção Gastrointestinal',
        description: 'Cuide da sua saúde digestiva com estratégias nutricionais que promovem o equilíbrio do organismo, ajudando na redução de desconfortos e no aumento da qualidade de vida.'
    },
    // ... more services
];

const mockTreatment = [
    {
        title: 'Avaliação Alimentar',
        description: 'Conhecer seus hábitos, preferências e restrições alimentares. Realizamos uma análise completa dos seus hábitos alimentares, considerando horários, locais de alimentação, preferências e restrições alimentares. Também avaliamos o histórico familiar de doenças, uso de medicamentos e exames laboratoriais, que poderão ser solicitados se necessário.'
    },
    {
        title: 'Avaliação Antropométrica',
        description: 'Entender a composição corporal para estabelecer metas realistas. Nesta etapa, medimos seu peso e altura para calcular o IMC (Índice de Massa Corporal) e analisamos as circunferências corporais (braço, cintura e quadril). Utilizamos a balança de bioimpedância para identificar o percentual de gordura corporal, compondo uma visão abrangente de sua condição física.'
    },
    {
        title: 'Estabelecimento de Metas e Objetivos',
        description: 'Definir um plano de ação alinhado ao seu ideal de saúde. Com os dados das avaliações, determinamos a faixa de peso ideal e a composição corporal desejada. Juntos, traçamos metas claras e realistas que guiarão nosso trabalho nutricional, de acordo com suas necessidades e objetivos pessoais.'
    },
    {
        title: 'Proposta de Reeducação Alimentar',
        description: 'Promover mudanças saudáveis e duradouras. Esta fase envolve um processo de reeducação gradual, incentivando a abandonar hábitos alimentares indesejáveis e a incorporar condutas mais saudáveis. Com isso, buscamos que as mudanças sejam duradouras, garantindo uma alimentação equilibrada e sustentável.'
    },
    {
        title: 'Elaboração do Plano Alimentar Personalizado',
        description: 'Criar uma alimentação saudável e prazerosa, respeitando suas preferências. Desenvolvemos um plano alimentar ajustado às suas necessidades, idade, condições fisiológicas e preferências. Os planos são individualizados, variados e flexíveis, para que você possa adotar uma alimentação saudável sem abrir mão dos alimentos que mais gosta.'
    },
    {
        title: 'Acompanhamento e Ajustes Periódicos',
        description: 'Monitorar o progresso e fazer ajustes conforme necessário. O acompanhamento contínuo é essencial para garantir que o plano esteja funcionando como esperado. Realizamos sessões regulares para avaliar o progresso, responder dúvidas, ajustar o plano e apoiar a sua evolução, mantendo a motivação ao longo do caminho.'
    }
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

const aboutUsHomeFeatures = ['Bem-estar Físico', 'Mental', 'Espiritual']

export default function Home() {
    return (
        <Layout>

            <BannerHome />

            <AboutUsHome title='Oi! Eu sou a' subtitle={
                <>
                    Nutricionista <br /> <span className='text-secondary font-semibold font-[family-name:var(--font-geist-sans)]'>Magda Simoni</span>
                </>
            } description='Sempre acreditei na nutrição como o caminho para a cura e o bem-estar. Muito além de pesos e medidas, a nutrição é uma jornada de autoconhecimento e equilíbrio. Cada pequena escolha que fazemos nos aproxima de uma vida mais plena, com mais energia e vitalidade.' features={aboutUsHomeFeatures} imageAlt='defaultt' imageSrc='/img/home/foto-perfil.jpg' />

            <AboutOurServices services={mockServices} />

            <BriefContentServices name='Investir em Você é Construir um Futuro Mais Saudável' about={
                <>
                    Transforme pequenas <br /> escolhas de hoje em<br /> <span className='text-tertiary font-semibold font-[family-name:var(--font-geist-sans)]'> conquistas de amanhã</span>  <br />
                </>
            } details='Nossa saúde reflete nossos hábitos diários. A cada passo dado em direção a uma alimentação equilibrada e consciente, estamos construindo um futuro de bem-estar físico, mental e espiritual. Acredite no poder das pequenas mudanças, pois elas são o caminho para as grandes transformações.' srcImage='/img/home/cute-little-girl-her-beautiful-parents-are-cutting-vegetables-kitchen-home.jpg' link='/#' />

            <AboutAdvancedTechnology services={mockAboutAdvancedTechnology} />


            <BriefContentServices name='Transforme Seu Prato, Transforme Sua Vida!' about={
                <>
                    O Poder da  Nutrição <br /> para uma <span className='text-tertiary font-semibold font-[family-name:var(--font-geist-sans)]'>  Mente Saudável</span>
                </>
            } details='Nossa alimentação vai além da nutrição física — ela cuida também da nossa mente. O que colocamos no prato tem um impacto direto sobre nosso humor, memória e disposição. Escolhas alimentares saudáveis e conscientes são passos essenciais para uma mente equilibrada e feliz.' details2='Descubra como a nutrição adequada pode ajudar você a alcançar um bem-estar físico e mental duradouro. Vamos juntos nessa jornada?' srcImage='/img/home/world-health-day-celebration-with-healthy-food.jpg' link='/#' order />

            <AboutOurTreatment services={mockTreatment} />

            {/* Como adicionar um Feed do Instagram na sua aplicação React - https://www.youtube.com/watch?v=WaMzfDN66MU */}
            {/* <LatestInstagramPosts /> */}

            <Feedback testimonials={testimonials} />
        </Layout>
    );
}
