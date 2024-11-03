import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";
import { buttonVariants } from "@/components/ui/button";
import InformationCountsAdvantages from "@/components/ui/informationCountsAdvantages";
import Image from "next/image";
import Link from "next/link";

interface ContentsServicesProps {
    name?: string;
    about?: string;
    details: string;
    srcImage: string;
    order?: boolean
    buttonLink?: string
    buttonLabel?: string
}


const AboutUs = () => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14">
                <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8 ">

                    <div className='hidden md:block justify-center md:justify-start'>
                        <Image
                            className="rounded-lg md:h-[380px]"
                            src="/img/home/sobre-historia-empresa.webp"
                            alt="pessoas unidas"
                            width={701}
                            height={100}
                            priority
                        />
                    </div>
                    <div className='flex flex-col gap-6 lg:w-[330px] text-center md:text-start'>
                        <div className="text-sm">BRANDANI CONTABILIDADE</div>
                        <div className="text-3xl"><span className="text-secondary font-semibold font-[family-name:var(--font-geist-sans)]">Sobre</span><br /> Nosso Escritório</div>
                        <div className='md:hidden block justify-center md:justify-start'>
                            <Image
                                className="rounded-lg md:h-[380px]"
                                src="/img/home/sobre-historia-empresa.webp"
                                alt="pessoas unidas"
                                width={701}
                                height={100}
                                priority
                            />
                        </div>
                        <div>
                            Fundada em 1983, empresa atua no ramo de contabilidade empresarial Lucro Real, Lucro Presumido e Simples nacional), contabilidade rural pessoa física e jurídica, MEI, planejamento tributário, planejamento sucessório.
                        </div>
                        <div>
                            Seu quadro de colaboradores é composto por contadores e especialistas na área contábil.
                        </div>
                        <div className='flex flex-row gap-3 mt-4 justify-center md:justify-start '>

                            <Link href="/contato" className={buttonVariants({ variant: "tertiary" })}>Preciso de um contador</Link>
                        </div>
                    </div>
                </div>
            </div>

        </ContainerDefault>
    )

}

const ContentsSevices: React.FC<ContentsServicesProps> = ({ name, about, details, srcImage, buttonLink, buttonLabel, order }) => {

    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14">
                <div className="grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8">
                    {/* Imagem */}
                    <div className={`flex justify-center md:justify-start ${order ? "md:order-last" : ""}`}>
                        <Image
                            className="rounded-lg"
                            src={srcImage}
                            alt="Sobre nós"
                            width={350}
                            height={214}
                            priority
                        />
                    </div>

                    {/* Texto */}
                    <div className="flex flex-col justify-center text-center md:text-left gap-6 lg:w-[330px]">
                        {name && <p className="text-sm">{name}</p>}
                        {about && <div className="text-2xl" dangerouslySetInnerHTML={{ __html: about }} />}
                        <p className="text-md">{details}</p>
                        {buttonLink && (
                            <div className="flex flex-col md:flex-row gap-3 mt-4">
                                <Link href={buttonLink} className={buttonVariants({ variant: "tertiary" })}>{buttonLabel}</Link>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </ContainerDefault>
    );
};


const stats = [
    {
        title: "Experência",
        value: "+40",
        subtitle: "anos"
    },
    {
        value: "R$ 50 mil",
        subtitle: "em redução de imposto e enquadramento"
    },
    {
        title: "Mais de",
        value: "10.2k",
        subtitle: "clientes atendidos"
    }
];

interface Info {
    title: string
    description: string
}
interface MissionVisionPrinciplesProps {
    missionVisionPrinciplesProps: Info[]
}

const missionVisionPrinciplesMock = [{ title: "MISSÃO", description: "Entregar os melhores serviços, fortalecendo parcerias duradouras." },
{ title: "VISÃO", description: "Gerar transformações de pessoas e negócios" },
{ title: "VALORES", description: "Dedicação total para alcançar metas e resultados, excelência nos serviços oferecidos, colaboração eficiente em busca de objetivos comuns." }]

const MissionVisionPrinciples: React.FC<MissionVisionPrinciplesProps> = ({ missionVisionPrinciplesProps }) => {
    return (
        <ContainerDefault>
            <div className="flex flex-col mx-auto md:w-[80%] gap-6 justify-center">

                {missionVisionPrinciplesProps.map((info, index) => (
                    <div className="flex bg-gradient-to-r from-[#004780] to-[#0060AD] text-white gap-6 rounded-lg py-10 px-12" key={index}>
                        <div className="flex md:flex-row flex-col gap-2">
                            <div className="font-semibold w-[120px]">{info.title}</div>
                            <div className="text-sm">{info.description}</div>
                        </div>

                    </div>
                ))}
            </div>
        </ContainerDefault>
    )

}

export default function Sobre() {
    return (
        <Layout>
            <AboutUs />
            <InformationCountsAdvantages stats={stats} />
            <ContentsSevices about={`<span class='text-secondary font-semibold font-[family-name:var(--font-geist-sans)]'>Nossa</span> Missão,<br> Visão e Valores`} details='O código de conduta e ética da empresa, é uma orientação para que todos os colaboradores tomem decisões baseadas nos valores que a empresa compartilha, reduzindo o risco de interpretações subjetivas quanto aos aspectos morais, éticos e legais concernentes às relações de trabalho.' srcImage='/img/home/homem-sentado-notebook.webp' order />
            <MissionVisionPrinciples missionVisionPrinciplesProps={missionVisionPrinciplesMock} />
            <ContentsSevices details='A Brandani Contabilidade conduz suas atividades e negócios conforme os padrões éticos, respeitando as leis e normas aplicáveis, incluindo, sem limitação, normas de saúde e segurança, legislação trabalhista e fiscal, sendo esta uma prerrogativa de atuação para os seus colaboradores e parceiros.' srcImage='/img/home/mesa-reuniao-pessoas.webp' />
            <ContentsSevices details='Prezamos por desempenhar com eficiência, presteza e atenção, as atribuições de sua função, objetivando melhores resultados e solicitando, se necessário, instruções e esclarecimentos para atingi-los.' srcImage='/img/home/dashboard-analise.webp' buttonLink="/contato" buttonLabel="Preciso de um contador" order />

        </Layout>
    )
}