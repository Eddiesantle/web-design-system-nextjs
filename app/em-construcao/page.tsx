// app/page.tsx

import Temporizador from "@/components/sections/Temporizador";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const EntreEmContato = () => {
    return (
        <div className="lg:absolute mx-auto text-black top-0 right-0 flex text-center  space-y-5 flex-col items-center justify-center border rounded-lg bg-white p-8 w-[339px] h-[305px] z-10">
            <Image src="/img/em-construcao/logo-cor.png" alt="logo" width={250} height={35} />
            <div className="font-medium">Te ajudo a conquistar saúde plena!</div>
            <div>
                Agende aqui suas consultas presenciais e on-line ⤵️</div>
            <div>
                <Link target="_blank" href="https://api.whatsapp.com/send?phone=4898237366&text=Olá, gostaria de saber mais sobre o trabalho da Nutri Magda Simoni" className={buttonVariants({ variant: "default", size: 'lg' })}>
                    <Image src="/img/em-construcao/icon-whatsapp.png" alt="logo" className="mr-2" width={20} height={20} /> Agendar uma consulta
                </Link>
            </div>
        </div>
    );
};



const AccordionSobre = () => {
    return (
        <div className="flex p-4 md:p-0 ">


            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Sobre a Magda Simoni | Nutricionista</AccordionTrigger>
                    <AccordionContent>
                        Sempre acreditei na nutrição como o caminho de cura e bem-estar. Uma ciência que abrange muito mais que pesos e medidas. É a construção de qualidade de vida e autocuidado. É sobre bem-estar físico, mental e espiritual. <br />
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
                    <a href="tel:+554898237366" target="_blank" rel="noopener noreferrer" className="flex  items-center space-x-2">
                        <span><Image src="/img/em-construcao/icon-whatsapp-azul.png" alt="logo" width={15} height={5} /></span>  <span>48 9823-7366</span>
                    </a>
                    <a href="mailto:simonimagda7@gmail.com" target="_blank" rel="noopener noreferrer" className="flex  items-center space-x-2">
                        <span><Image src="/img/em-construcao/icon-email-azul.png" alt="logo" width={15} height={45} /></span> <span>simonimagda7@gmail.com</span>
                    </a>
                    <a href="https://www.instagram.com/nutrimagdasimoni/" target="_blank" rel="noopener noreferrer" className="flex  items-center space-x-2">
                        <span><Image src="/img/em-construcao/icon-instagram-azul.png" alt="logo" width={15} height={5} /></span>  <span>@nutrimagdasimoni</span>
                    </a>
                </div>

                {/* Direitos Reservados */}
                <div className="mt-4 md:mt-0 text-center">
                    <p>© Todos os direitos reservados. | MAGDA SIMONI NUTRI</p>
                </div>
            </div>
        </footer>
    );
};

export default function EmConstrucao() {
    return (
        <>
            <div className="font-[family-name:var(--font-geist-sans)]">
                <div className="md:bg-cover bg-center lg:h-screen flex flex-col justify-between" style={{ backgroundImage: `url('img/em-construcao/banner-fundo.png')` }}>
                    {/* Container Principal */}
                    <div className="md:container md:mx-auto flex-grow flex items-center justify-center">
                        {/* Grid Responsiva */}
                        <div className="grid grid-cols-1 gap-4 w-full md:w-[70%] rounded-lg">
                            {/* Coluna 1 */}
                            <div className="col-span-12 md:col-span-12 ">
                                <div className="px-8 my-8 text-white">
                                    <Image src="/img/em-construcao/logo-branca.png" alt="logo" width={288} height={14} />

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
                            <div className="flex col-span-12 lg:w-[50%] text-white mb-3 justify-center md:justify-start">

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
