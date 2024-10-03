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
                    <div className='flex flex-col gap-6 lg:w-[330px]'>
                        <div className="text-sm">BRANDANI CONTABILIDADE</div>
                        <div className="text-2xl"><span className="font-semibold">Sobre</span><br /> Nosso Escritório</div>
                        <div>
                            Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade físcal.
                        </div>
                        <div>
                            Seu quadro de colaboradores é composto por contadores e especialisatas na área contábil
                        </div>
                        <div className='flex flex-row gap-3 mt-4'>

                            <Link href="/sobre" className={buttonVariants({ variant: "default" })}>Preciso de um contatos</Link>
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
                            <div className="mt-4">
                                <Link href={buttonLink} className={buttonVariants({ variant: "default" })}>{buttonLabel}</Link>
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
        title: "Experiencia",
        value: "+40",
        subtitle: "anos"
    },
    {
        value: "50 mil",
        subtitle: "em redução de imposto e enquadramento"
    },
    {
        title: "Mais de",
        value: "10.2k",
        subtitle: "clientes atendidos"
    }
];

export default function Sobre() {
    return (
        <Layout>
            <AboutUs />
            <InformationCountsAdvantages stats={stats} />
            <ContentsSevices about={`<span class='text-[#29AAE1] font-semibold'>Nossa</span> Missão,<br> Visão e Valores`} details='Nosso planejamento tributário otimiza sua carga fiscal para aumentar a lucratividade. Planejamos sua transição patrimonial para garantir o futuro do seu negócio. Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade físcal.' srcImage='/img/em-construcao/banner-fundo.png' order />
            <ContentsSevices details='Nosso planejamento tributário otimiza sua carga fiscal para aumentar a lucratividade. Planejamos sua transição patrimonial para garantir o futuro do seu negócio. Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade físcal.' srcImage='/img/em-construcao/banner-fundo.png' />
            <ContentsSevices details='Nosso planejamento tributário otimiza sua carga fiscal para aumentar a lucratividade. Planejamos sua transição patrimonial para garantir o futuro do seu negócio. Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar seu negócio com total conformidade físcal.' srcImage='/img/em-construcao/banner-fundo.png' buttonLink="sobre" buttonLabel="Preciso de um contador" order />

        </Layout>
    )
}