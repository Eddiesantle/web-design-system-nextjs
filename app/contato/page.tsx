import { ContainerDefault } from "@/components/layout/containerDefault";
import { Layout } from "@/components/layout/layout";
import Image from "next/image";
import FormContact from "@/components/ui/FormContact";
import { Metadata } from "next";
import GoogleMapContact from "@/components/ui/googleMapContact";

export const metadata: Metadata = {
    title: "Brandani Contabilidade | Contato",
}

const InfoContact = () => {
    return (
        <ContainerDefault>
            <div className="grid grid-cols-1 lg:grid-cols-8 justify-center pt-14 pb-20">
                <div className={`grid col-start-2 col-span-6 md:grid-cols-2 w-full mx-auto gap-8`}>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl">Entre em <span className="text-secondary font-semibold font-[family-name:var(--font-geist-sans)]">contato</span></h2>
                        <p className="text-sm w-[80%]">Nossa equipe desenvolve estratégias eficazes para otimizar sua carga tributária, seja você empresário</p>
                    </div>
                    <div className="flex md:flex-row justify-center space-y-6 md:space-y-0 flex-col gap-2 text-sm">

                        <div className="flex md:flex-col flex-row gap-3">
                            <div className="w-[55px] ">
                                <Image src='/img/home/icon-position-map.webp' alt="contato" width={55} height={55} />
                            </div>
                            <div className="w-[155px] md:w-full gap-2 ">
                                <div className="text-lg">Endereço</div>
                                <div>RONDÔNIA</div>
                                <div>Av. Mal. Rondon, 2679 - Princesa Isabel, Cacoal Cep: 76.964-091</div>
                            </div>
                        </div>
                        <div className="flex  md:flex-col flex-row gap-3">
                            <div className="w-[55px]">
                                <Image src='/img/home/icon-contact.webp' alt="contato" width={55} height={55} />
                            </div>
                            <div className="w-[155px] md:w-full gap-2">
                                <div className="text-lg">Contato</div>
                                <div>(69) 3441-5425</div>
                                <div>adm@brandanicontabilidade.com.br</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </ContainerDefault>)
}



const Contato = () => {

    return (
        <Layout>
            <InfoContact />
            <GoogleMapContact />
            <FormContact />
        </Layout>

    )
}
export default Contato;