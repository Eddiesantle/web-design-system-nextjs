import Link from "next/link"
import { ContainerDefault } from "../layout/ContainerDefault"
import { buttonVariants } from "../ui/Button"

interface Info {
    title: string
    description: string
}
interface MissionVisionPrinciplesProps {
    missionVisionPrinciplesProps: Info[]
}

const MissionVisionPrinciples: React.FC<MissionVisionPrinciplesProps> = ({ missionVisionPrinciplesProps }) => {
    return (
        <div className="bg-[#EAEAEA] py-10">
            <ContainerDefault>
                <div className="flex flex-col mx-auto md:w-[80%] gap-6 justify-center">
                    <div className="mx-auto text-3xl text-primary font-semibold font-[family-name:var(--font-geist-sans)]">
                        Missão, Diferenciais e Valores
                    </div>

                    <div className="flex text-center">
                        {missionVisionPrinciplesProps.map((info, index) => (
                            <div className="flex flex-col gap-6 py-10 px-12" key={index}>
                                <div className="text-xl font-bold text-primary">{info.title}</div>
                                <div className="text-sm">{info.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex mx-auto">
                        <Link href="/" className={buttonVariants({ variant: "default", size: "lg" })}>Agendar Consulta</Link>
                    </div>
                </div>
            </ContainerDefault>
        </div>

    )

}

export default MissionVisionPrinciples