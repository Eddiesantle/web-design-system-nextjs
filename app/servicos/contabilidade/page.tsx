
import { Layout } from "@/components/layout/layout";
import AboutUsService from "@/components/ui/aboutUsService";
import LatestInstagramPosts from "@/components/ui/latestInstagramPosts";
import ServicesOffered from "@/components/ui/servicesOffered";



const services = [
    { icon: "/img/home/check-verified.svg", description: "Gestão de tributos rurais (Imposto de Renda, ITR)" },
    { icon: "/img/home/check-verified.svg", description: "Escrituração contábil e fiscal" },
    { icon: "/img/home/check-verified.svg", description: "Planejamento fiscal para produtores" },
    { icon: "/img/home/check-verified.svg", description: "Assessoria para financiamentos rurais" },
    { icon: "/img/home/check-verified.svg", description: "Relatórios financeiros e análise de custos" },
    // ... more services
];



const instagramPosts = [
    {
        imageUrl: '/img/em-construcao/banner-fundo.png',
        postUrl: 'https://www.instagram.com/brandani_contabilidade',
        description: 'Dicas de contabilidade para o agronegócio!',
    },
    {
        imageUrl: '/img/em-construcao/banner-fundo.png',
        postUrl: 'https://www.instagram.com/brandani_contabilidade',
        description: 'Saiba como planejar seu imposto de renda.',
    },
    {
        imageUrl: '/img/em-construcao/banner-fundo.png',
        postUrl: 'https://www.instagram.com/brandani_contabilidade',
        description: 'Microempreendedor individual: como começar.',
    },
];

export default function Sobre() {
    return (
        <Layout>
            <AboutUsService
                title="CONTABILIDADE RURAL"
                subtitle="Soluções contábeis para o Produtor Rural"
                description="Oferecemos serviços especializados em contabilidade rural, auxiliando produtores e empresários do setor a manterem suas obrigações fiscais em dia e a obterem o máximo de benefícios tributários."
                imageSrc="/img/em-construcao/banner-fundo.png"
                imageAlt="pessoas unidas"
            />
            <ServicesOffered
                title="SIMPLIFICAMOS SUA CONTABILIDADE"
                description="Conhecimento profundo das particularidades do setor rural, proporcionando estratégias personalizadas para aumentar a lucratividade. Atuamos tanto para pessoas físicas quanto jurídicas, garantindo conformidade com a legislação vigente.
                "
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