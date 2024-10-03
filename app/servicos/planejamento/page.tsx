import { Layout } from "@/components/layout/layout";
import AboutUsService from "@/components/ui/aboutUsService";
import LatestInstagramPosts from "@/components/ui/latestInstagramPosts";
import ServicesOffered from "@/components/ui/servicesOffered";

const services = [
    { icon: "/img/em-construcao/banner-fundo.png", description: "Altos padrões de integridade" },
    { icon: "/img/em-construcao/banner-fundo.png", description: "Expertise em contabilidade rural" },
    { icon: "/img/em-construcao/banner-fundo.png", description: "Expertise em contabilidade rural" },
    { icon: "/img/em-construcao/banner-fundo.png", description: "Expertise em contabilidade rural" },
    { icon: "/img/em-construcao/banner-fundo.png", description: "Expertise em contabilidade rural" },
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
                title="CONTABILIDADE EMPRESARIAL"
                subtitle="Confie em nossos melhores contadores"
                description="Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade físcal."
                imageSrc="/img/em-construcao/banner-fundo.png"
                imageAlt="pessoas unidas"
            />
            <ServicesOffered
                title="SIMPLIFICAMOS SUA CONTABILIDADE"
                description="Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade fiscal."
                services={services}
            />
            <AboutUsService
                title="CONTABILIDADE EMPRESARIAL"
                subtitle="Confie em nossos melhores contadores"
                description="Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade físcal."
                imageSrc="/img/em-construcao/banner-fundo.png"
                imageAlt="pessoas unidas"
                order
            />

            <ServicesOffered
                title="SIMPLIFICAMOS SUA CONTABILIDADE"
                description="Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade fiscal."
                services={services}
            />

            <LatestInstagramPosts posts={instagramPosts} />

        </Layout>
    )
}