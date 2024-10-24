
import { Layout } from "@/components/layout/layout";
import AboutUsService from "@/components/ui/aboutUsService";
import LatestInstagramPosts from "@/components/ui/latestInstagramPosts";
import ServicesOffered from "@/components/ui/servicesOffered";



const servicesRuralMock = [
    { icon: "/img/home/check-verified.svg", description: "Gestão de tributos rurais (Imposto de Renda, ITR)" },
    { icon: "/img/home/check-verified.svg", description: "Escrituração contábil e fiscal" },
    { icon: "/img/home/check-verified.svg", description: "Planejamento fiscal para produtores" },
    { icon: "/img/home/check-verified.svg", description: "Assessoria para financiamentos rurais" },
    { icon: "/img/home/check-verified.svg", description: "Relatórios financeiros e análise de custos" },
    // ... more services
];

const servicesEmpresarialMock = [
    { icon: "/img/home/check-verified.svg", description: "Escrituração contábil e fiscal para empresas" },
    { icon: "/img/home/check-verified.svg", description: "Apuração de tributos (Lucro Real, Presumido, Simples Nacional)" },
    { icon: "/img/home/check-verified.svg", description: "Balanços patrimoniais e relatórios financeiros" },
    { icon: "/img/home/check-verified.svg", description: "Demonstração de Resultados do Exercício (DRE)" },
    { icon: "/img/home/check-verified.svg", description: "Consultoria para escolha do melhor regime tributário" },
    // ... more services
];


export default function Sobre() {
    return (
        <Layout>
            <AboutUsService
                id="rural"
                title="CONTABILIDADE RURAL"
                subtitle="Soluções <br> contábeis para <br> o <span class='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'>Produtor Rural<span/>"
                description="Oferecemos serviços especializados em contabilidade rural, auxiliando produtores e empresários do setor a manterem suas obrigações fiscais em dia e a obterem o máximo de benefícios tributários."
                imageSrc="/img/home/senhor-do-campo-b.webp"
                imageAlt="pessoas unidas"
            />
            <ServicesOffered
                title="SIMPLIFICAMOS SUA CONTABILIDADE"
                description="Conhecimento profundo das particularidades do setor rural, proporcionando estratégias personalizadas para aumentar a lucratividade. Atuamos tanto para pessoas físicas quanto jurídicas, garantindo conformidade com a legislação vigente.
                "
                services={servicesRuralMock}
            />
            <AboutUsService
                id="empresarial"
                title="CONTABILIDADE EMPRESARIAL"
                subtitle="<span class='text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]'>O que você precisa?</span> <br> Lucro Real, Presumido e <br> Simples Nacional"
                description="Atuamos com excelência na contabilidade de empresas de diferentes portes e regimes tributários, garantindo que sua empresa esteja em conformidade e pague menos impostos, de forma legal e estratégica."
                imageSrc="/img/home/contador-sorrido-com-tablet.webp"
                imageAlt="pessoas unidas"
                order
            />

            <ServicesOffered
                title="SIMPLIFICAMOS SUA CONTABILIDADE"
                description="Identificação do regime tributário ideal para cada tipo de negócio, com o objetivo de otimizar resultados e reduzir a carga fiscal. Atuamos tanto para pessoas físicas quanto jurídicas, garantindo conformidade com a legislação vigente."
                services={servicesEmpresarialMock}
            />

            <LatestInstagramPosts />

        </Layout>
    )
}