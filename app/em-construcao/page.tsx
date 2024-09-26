// app/page.tsx

import Temporizador from "@/components/em-construcao/temporizador/Temporizador";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const EntreEmContato = () => {
    return (
        <div className="lg:absolute mx-auto text-black top-0 right-0 flex text-center  space-y-5 flex-col items-center justify-center border rounded-lg bg-white p-8 w-[339px] h-[305px] z-10">
            <Image src="/img/icon-b-logo.png" alt="logo" width={37} height={35} />
            <div className="font-medium">ENTRE EM CONTATO</div>
            <div>Clique no botão abaixo para ser redirecionado para nosso whatsapp</div>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=6934415425" className={buttonVariants({ variant: "default", size: 'lg' })}>
                <Image src="/img/icon-whatsapp.png" alt="logo" className="mr-2" width={20} height={20} /> CHAMAR NO WHATSAPP
            </Link>
        </div>
    );
};



const AccordionSobre = () => {
    return (
        <div className="flex p-4 md:p-0 ">
            <div className="hidden md:block w-[80px]">
                <Image src="/img/icon-b-cinza.png" alt="logo" width={60} height={50} />
            </div>


            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Sobre a Brandani Contabilidade</AccordionTrigger>
                    <AccordionContent>
                        Fundada em 1983, empresa atua no ramo de contabilidade empresarial (Lucro Real, Lucro Presumido e Simples nacional), contabilidade rural pessoa física e jurídica, MEI, planejamento tributário e planejamento sucessório.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

const Rodape = () => {
    return (
        <footer className="text-white text-sm p-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
                {/* Contato */}
                <div className="flex space-x-4 md:space-y-0 space-y-3 lg:flex-row flex-col items-center justify-between">
                    <a href="tel:+556934415425" target="_blank" rel="noopener noreferrer" className="flex  items-center space-x-2">
                        <span><Image src="/img/icon-whatsapp-azul.png" alt="logo" width={15} height={5} /></span>  <span>69 3441-5425</span>
                    </a>
                    <a href="mailto:ivandro@brandanicontabilidade.com" target="_blank" rel="noopener noreferrer" className="flex  items-center space-x-2">
                        <span><Image src="/img/icon-email-azul.png" alt="logo" width={15} height={45} /></span> <span>ivandro@brandanicontabilidade.com</span>
                    </a>
                    <a href="https://www.instagram.com/brandanicontabilidade/" target="_blank" rel="noopener noreferrer" className="flex  items-center space-x-2">
                        <span><Image src="/img/icon-instagram-azul.png" alt="logo" width={15} height={5} /></span>  <span>@brandanicontabilidade</span>
                    </a>
                </div>

                {/* Direitos Reservados */}
                <div className="mt-4 md:mt-0 text-center">
                    <p>© Todos os direitos reservados. | BRANDANI CONTABILIDADE</p>
                </div>
            </div>
        </footer>
    );
};

export default function EmConstrucao() {
    return (
        <>
            <div className="font-[family-name:var(--font-geist-sans)]">
                <div className="md:bg-cover bg-center lg:h-screen flex flex-col justify-between" style={{ backgroundImage: `url('img/banner-fundo.png')` }}>
                    {/* Container Principal */}
                    <div className="md:container md:mx-auto flex-grow flex items-center justify-center">
                        {/* Grid Responsiva */}
                        <div className="grid grid-cols-1 gap-4 w-full md:w-[70%] rounded-lg">
                            {/* Coluna 1 */}
                            <div className="col-span-12 md:col-span-12 ">
                                <div className="px-8 my-8 text-white">
                                    <Image src="/img/logo-branca.png" alt="logo" width={388} height={114} />

                                </div>



                                <div className="relative lg:h-[250px] py-6 space-y-6 lg:space-y-0 ">

                                    <div className="px-8 my-3 ml-4  text-white text-center md:text-start">
                                        <h2 className="text-3xl">Site em construção</h2>
                                        <p className="text-3xl font-black">Fique atento...</p>
                                    </div>
                                    <Temporizador />
                                    <EntreEmContato />
                                </div>
                            </div>

                            {/* Coluna 1 */}
                            <div className="flex col-span-12 lg:w-[50%] text-white mt-6 mb-3 justify-center md:justify-start">

                                <AccordionSobre />
                            </div>

                        </div>

                    </div>

                    {/* Rodapé */}
                    <Rodape />
                </div>

            </div >

        </>
    );
}
