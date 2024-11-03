'use client'

import Link from "next/link";

import { ContainerDefault } from "../layout/containerDefault";
import { buttonVariants } from "./button";
import Image from "next/image";



const BannerHome = () => {



    return (
        <div className="md:bg-cover bg-center flex flex-col justify-between relative" style={{ backgroundImage: `url('img/em-construcao/banner-fundo.png')` }}>
            <ContainerDefault>
                <div className="grid grid-cols-1 lg:grid-cols-8 justify-center pb-28 pt-4 my-14 text-white px-3 ">
                    <div className="grid md:col-start-2 md:col-span-6 md:grid-cols-2 w-full mx-auto gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="text-sm flex gap-1 items-center">
                                <div> CRN-3: 28101</div>
                            </div>
                            <h1 className="text-5xl">
                                <>Nutricionista <br /> <span className="text-secondary font-semibold font-[family-name:var(--font-frank-ruhl-libre)]">Magda Simoni</span></>
                            </h1>
                            <div className="text-xl">
                                Te ajudo a conquistar saúde plena!
                            </div>
                            <div className='flex md:flex-row flex-col gap-3 mt-4'>
                                <Link href="/#" className={buttonVariants({ variant: "default", size: 'lg' })}>
                                    Agendar Consulta
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </ContainerDefault>

            <div className="absolute w-full h-40 bottom-0 left-0 right-0">
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
