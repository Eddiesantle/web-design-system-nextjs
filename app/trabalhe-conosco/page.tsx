
import Link from "next/link";
import FormWorkWithUs from "@/components/form/FormWorkWithUs";
import { ContainerDefault } from "@/components/layout/ContainerDefault";
import { Layout } from "@/components/layout/Layout";


const InfoContact = () => {
    return (
        <div className="bg-[#0D4259] text-white py-16 ">
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center">
                    <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8`}>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl">Entre em <span className="text-secondary font-semibold font-[family-name:var(--font-geist-sans)]">contato</span></h2>
                            <p className="text-sm w-[80%]">Fique disponível para todas as nossas funções/posições</p>
                        </div>

                    </div>
                </div>

            </ContainerDefault>
        </div>

    )
}

const InfoContactTermos = () => {
    return (
        <div className="bg-[#EEEEEE] py-6 ">
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center">
                    <div className={`grid col-start-2 col-span-6 md:grid-cols-1 w-full mx-auto gap-8`}>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-sm">Por favor, clique aqui para ver nossos <Link href="/termos-de-uso" className=" underline-offset-1 underline ">Termos e condições</Link>.</h2>
                            <p className="text-sm w-[80%]">Ao enviar seu CV você aceita conceder à Page Personnel seus dados pessoais e profissionais. Seus dados serão processados de acordo com a nossa  <Link href="/politica-de-privacidade" className="underline-offset-1 underline">Política de Privacidade</Link> .</p>
                        </div>
                    </div>
                </div>

            </ContainerDefault>
        </div>

    )
}





const TrabalheConosco = () => {

    return (
        <Layout>
            <InfoContact />
            <FormWorkWithUs />
            <InfoContactTermos />
        </Layout>

    )
}
export default TrabalheConosco;