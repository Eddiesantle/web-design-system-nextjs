
import { ContainerDefault } from "@/components/layout/ContainerDefault";
import { Layout } from "@/components/layout/Layout";
import BannerBackgroundText from "@/components/sections/BannerBackgroundText";
import MissionVisionPrinciples from "@/components/sections/MissionVisionPrinciples";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

interface ContentsServicesProps {
    name?: string;
    about?: React.JSX.Element;
    details: string;
    srcImage: string;
    order?: boolean
    buttonLink?: string
    buttonLabel?: string
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
                        {about && <div className="text-3xl">{about}</div>}
                        <p className="text-md">{details}</p>
                        {buttonLink && (
                            <div className="flex flex-col md:flex-row gap-3 mt-4">
                                <Link href={buttonLink} className={buttonVariants({ variant: "secondary", size: "lg" })}>{buttonLabel}</Link>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </ContainerDefault>
    );
};




const missionVisionPrinciplesMock = [{ title: "MISSÃO", description: "Proporcionar saúde e bem-estar aos meus pacientes, de forma multidisciplinar e humanizada." },
{ title: "DIFERENCIAIS", description: "Assegurar o atendimento individualizado e focado nas necessidades pessoais de cada paciente." },
{ title: "VALORES", description: "Tratar pacientes com sensibilidade, empatia, respeito, inovação e excelência." }]



const TheStory = () => {

    return (
        <ContainerDefault>
            <div className="grid grid-cols-1  text-center justify-center py-14 gap-5">
                <div className="text-3xl"> <span className="text-secondary font-semibold font-[family-name:var(--font-geist-sans)]">A História</span>  </div>
                <div className="">
                    Desde criança me interessei pela a composição dos alimentos e como eles interagem com nosso corpo. Conforme fui crescendo a minha paixão pela a nutrição foi aumentando e aos 17 anos resolvi sair da minha cidade natal, Taubaté, e vir cursar nutrição em São Paulo.
                </div>
                <div className="">
                    Desde criança me interessei pela a composição dos alimentos e como eles interagem com nosso corpo. Conforme fui crescendo a minha paixão pela a nutrição foi aumentando e aos 17 anos resolvi sair da minha cidade natal, Taubaté, e vir cursar nutrição em São Paulo.
                </div>
                <div className="flex mx-auto gap-3 mt-4">
                    <Link href="/" className={buttonVariants({ variant: "secondary", size: "lg" })}>Agendar Consulta</Link>
                </div>
            </div>
        </ContainerDefault>
    )

}

export default function Sobre() {
    return (
        <Layout>
            <BannerBackgroundText />
            <ContentsSevices about={<>
                Nutricionista por <span className='text-secondary font-semibold font-[family-name:var(--font-geist-sans)]'>paixão </span> e, <span className='text-secondary font-semibold font-[family-name:var(--font-geist-sans)]'>amor a profissão </span>

            </>} details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta euismod ultricies. Nunc quam libero, placerat volutpat aliquet ut, laoreet ac dolor. Morbi sodales justo ut viverra scelerisque. Integer semper lacus vitae fringilla cursus. In mattis, lectus in elementum sollicitudin,' buttonLink="/contato" buttonLabel="Área de Atuações" srcImage='/img/home/foto-perfil.jpg' order />
            <TheStory />
            <MissionVisionPrinciples missionVisionPrinciplesProps={missionVisionPrinciplesMock} />

        </Layout>
    )
}