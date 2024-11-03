'use client'

import Link from "next/link";

import { ContainerDefault } from "../layout/containerDefault";
import { buttonVariants } from "./button";
import Image from "next/image";



const BannerHome = () => {



    return (
        <div className="bg-cover bg-center bg-fixed  flex flex-col justify-between relative h-[700px] md:h-[600px] lg:h-[700px] " style={{ backgroundImage: `url('img/em-construcao/banner-fundo.png')` }}>
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center py-14 my-14 text-white px-3 ">
                    <div className="grid md:col-start-2 md:col-span-6 md:grid-cols-2 w-full mx-auto gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="text-sm flex gap-1 items-center">
                                <div> CRN-3: 28101</div>
                            </div>
                            <h1 className="text-5xl">
                                <>Nutricionista <br /> <span className="text-secondary font-semibold font-[family-name:var(--font-geist-sans)]">Magda Simoni</span></>
                            </h1>
                            <div className="text-xl">
                                Emagrecimento Consciente, Doenças Autoimunes, Disfunção Gastrointestinal. <br />
                                Te ajudo a conquistar saúde plena!
                            </div>
                            <div className='flex md:flex-row flex-col gap-3 mt-4'>
                                <Link href="/#" className={buttonVariants({ variant: "outline", size: 'lg' })}>
                                    Saiba Mais
                                </Link>
                                <Link target="_blank" href="https://wa.me/+554898237366?text=Olá! Acessei o site da Dra. Magda Simoni e gostaria de agendar uma consulta." className={buttonVariants({ variant: "default", size: 'lg' })}>
                                    Agende Sua Consulta
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </ContainerDefault>

            <div className="absolute w-full bottom-0 left-0 right-0">
                <Image src="/img/home/landing_page_white_background-2304w.png" className="object-cover" sizes="100vw"
                    // Make the image display full width
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={100}
                    height={100}
                    alt="landing page white background" />
            </div>

        </div>

    );
}



export default BannerHome;
