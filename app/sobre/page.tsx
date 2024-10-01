import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";


const InformationCountsAdvantages = () => {
    return (
        <ContainerDefault>
            <div className="flex justify-center">
                <div className="flex bg-blue-500 text-white gap-6 rounded-lg p-6">
                    <div className="flex flex-col text-center w-[150px]">
                        <div className="text-sm">Experiencia</div>
                        <div className="text-3xl font-semibold">+40</div>
                        <div className="text-sm">anos</div>
                    </div>
                    <div className="flex flex-col text-center w-[150px]">
                        <div className="text-sm">Mais de</div>
                        <div className="text-3xl font-semibold">10.2k</div>
                        <div className="text-sm">clientes atendidos</div>
                    </div>
                    <div className="flex flex-col text-center w-[150px]">
                        <div className="text-3xl font-semibold">50 mil</div>
                        <div className="text-sm">em redução de imposto e enquadramento</div>
                    </div>
                </div>

            </div>
        </ContainerDefault>
    )
}

export default function Sobre() {
    return (
        <Layout>
            <InformationCountsAdvantages />
        </Layout>
    )
}