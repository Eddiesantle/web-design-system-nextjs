import { Layout } from "@/components/layout/layout";
import AboutUsService from "@/components/ui/aboutUsService";
import LatestInstagramPosts from "@/components/ui/latestInstagramPosts";
import ServicesOffered from "@/components/ui/servicesOffered";

const servicesPlanejamentoTributarioMock = [
    { icon: "/img/home/check-verified.svg", description: "Análise e simulação de regimes tributários" },
    { icon: "/img/home/check-verified.svg", description: "Reestruturação fiscal para redução de impostos" },
    { icon: "/img/home/check-verified.svg", description: "Planejamento de obrigações fiscais e tributárias" },
    { icon: "/img/home/check-verified.svg", description: "Estratégias para evitar multas e autuações fiscais" },
    { icon: "/img/home/check-verified.svg", description: "Monitoramento de oportunidades tributárias e incentivos fiscais" },
    // ... more services
];

const servicesPlanejamentoSucessorioMock = [
    { icon: "/img/home/check-verified.svg", description: "Elaboração de planos sucessórios personalizados" },
    { icon: "/img/home/check-verified.svg", description: "Avaliação e estruturação de bens e patrimônio" },
    { icon: "/img/home/check-verified.svg", description: "Assessoria jurídica e contábil para sucessão familiar" },
    { icon: "/img/home/check-verified.svg", description: "Otimização tributária na transferência de patrimônio" },
    { icon: "/img/home/check-verified.svg", description: "Prevenção de conflitos e redução de custos com herança" },
    // ... more services
];


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

export default function Sobre() {
    return (
        <Layout>
            <AboutUsService
                title="PLANEJAMENTO TRIBUTÁRIO"
                subtitle="Planejamento <br> <span class='text-secondary'>Tributário</span> pague <br> menos legalmente"
                description="Nossa equipe desenvolve estratégias eficazes para otimizar sua carga tributária, seja você empresário ou produtor rural, garantindo que pague menos impostos sem abrir mão da legalidade."
                imageSrc="/img/home/mulher-sorrindo-tributario.png"
                imageAlt="pessoas unidas"
            />
            <ServicesOffered
                title="SIMPLIFICAMOS SEU PLANEJAMENTO"
                description="Implementação de estratégias personalizadas para cada cliente, sempre com foco em maximizar resultados e reduzir o impacto tributário."
                services={servicesPlanejamentoTributarioMock}
            />
            <AboutUsService
                title="PLANEJAMENTO SUCESSÓRIO"
                subtitle="Planejamento <br> <span class='text-secondary'>Sucessório</span> proteja <br> o futuro do seu <br> patrimônio"
                description="Oferecemos assessoria completa em planejamento sucessório, garantindo a continuidade dos negócios e a correta transferência de bens para herdeiros, de forma legal e segura."
                imageSrc="/img/home/luz-calculadora.png"
                imageAlt="pessoas unidas"
                order
            />

            <ServicesOffered
                title="SIMPLIFICAMOS SEU PLANEJAMENTO"
                description="Experiência em estruturar sucessões familiares, garantindo uma transição tranquila e a preservação do patrimônio familiar com segurança jurídica e fiscal."
                services={servicesPlanejamentoSucessorioMock}
            />

            <LatestInstagramPosts posts={instagramPosts} />

        </Layout>
    )
}